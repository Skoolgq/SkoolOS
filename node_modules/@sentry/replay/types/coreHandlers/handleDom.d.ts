import type { ReplayContainer } from '../types';
interface DomHandlerData {
    name: string;
    event: Node | {
        target: Node;
    };
}
export declare const handleDomListener: (replay: ReplayContainer) => (handlerData: DomHandlerData) => void;
export {};
//# sourceMappingURL=handleDom.d.ts.map