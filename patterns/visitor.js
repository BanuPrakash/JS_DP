class DocumentPart {
    accept(visitor) {
        throw new Error("accept method of Visitor type!!!");
    }
}

// concrete elements
class Paragraph extends DocumentPart {
    constructor(text) {
        super();
        this.text = text;
    }

    accept(visitor) {
        // double dispatch
        return visitor.visitParagraph(this);
    }
}

class Heading extends DocumentPart {
    constructor(level, text) {
        super();
        this.level = level;
        this.text = text;
    }

    accept(visitor) {
        // double dispatch
        return visitor.visitHeading(this);
    }
}


class Link extends DocumentPart {
    constructor(url, text) {
        super();
        this.url = url;
        this.text = text;
    }

    accept(visitor) {
        // double dispatch
        return visitor.visitLink(this);
    }
}

// Document that consists of multiple parts
class Document {
    constructor() {
        this.parts = [];
    }

    addPart(part) {
        this.parts.push(part);
        return this;
    }

    accept(visitor) {
        return this.parts.map(part => part.accept(visitor));
    }
}

// Visitor
class DocumentVisitor {
    visitHeading(heading){}
    visitParagraph(paragraph){}
    visitLink(link){}
}

// Concreate Visitor

class HtmlVisitor extends DocumentVisitor {
    visitHeading(heading){
        return `<h${heading.level}>${heading.text}</h${heading.level}`
    }
    visitParagraph(paragraph){
        return `<p>${paragraph.text}</p>`
    }
    visitLink(link){
        return `<a href="${link.url}">${link.text}</a>`
    }
}


class TextVisitor extends DocumentVisitor {
    visitHeading(heading){
        return heading.text;
    }
    visitParagraph(paragraph){
        return paragraph.text;
    }
    visitLink(link){
        return `${link.url} (${link.text})`
    }
}

// usage
const doc = new Document()
    .addPart(new Heading(1, "Visitor Pattern"))
    .addPart(new Paragraph("Visitor pattern is behavioral"))
    .addPart(new Link("Instructions ", "http://sample.com"));

const htmlVisitor = new HtmlVisitor();
const html = doc.accept(htmlVisitor).join('\n');
console.log(html);

const textVisitor = new TextVisitor();
const text = doc.accept(textVisitor).join('\n');
console.log(text);