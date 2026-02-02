import { container } from "tsyringe";

export default function useInjection<T>(token:string): T {
    return container.resolve<T>(token);
}