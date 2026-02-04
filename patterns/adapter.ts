interface User {
    id: number;
    name: string;
    isActive: boolean;
}

interface DataAdapter<T> {
    getData(): T
}

// legacy
class XmlApi {
    fetchXml(): string {
        return `
            <user>
                <id>42</id>
                <name>Jack</name>
                <isActive>true</isActive>
            </user>
        `
    }
}

class JsonAPI {
    fetchJson() : User {
        return {
            id: 52,
            name : "Roger",
            isActive: true
        }
    }
}

class XmlToJsonAdapter implements DataAdapter<User> {
    xmlApi: XmlApi;
    constructor(xmlApi:XmlApi) {
        this.xmlApi = xmlApi;
    }

    getData(): User {
        const xmlString = this.xmlApi.fetchXml();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        return {
            id: Number(xmlDoc.querySelector("id")?.textContent ?? 0),
            name: xmlDoc.querySelector("name")?.textContent ?? "",
            isActive: xmlDoc.querySelector("isActive")?.textContent  === "true"
        }
    }
}

class JsonUserAdapter implements DataAdapter<User> {
    private jsonApi: JsonAPI;
    constructor(jsonApi: JsonAPI) {
        this.jsonApi = jsonApi;
    }

    getData() : User {
        return this.jsonApi.fetchJson();
    }
}

// const adapter = new XmlToJsonAdapter(new XmlApi());
// const adpter = new JsonUserAdapter(new JsonApi());
// Better use factory to get different adapter

// const user = adapter.getData();