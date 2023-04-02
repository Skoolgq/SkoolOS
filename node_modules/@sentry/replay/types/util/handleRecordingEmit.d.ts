import type { RecordingEvent, ReplayContainer } from '../types';
declare type RecordingEmitCallback = (event: RecordingEvent, isCheckout?: boolean) => void;
/**
 * Handler for recording events.
 *
 * Adds to event buffer, and has varying flushing behaviors if the event was a checkout.
 */
export declare function getHandleRecordingEmit(replay: ReplayContainer): RecordingEmitCallback;
export {};
//# sourceMappingURL=handleRecordingEmit.d.ts.map