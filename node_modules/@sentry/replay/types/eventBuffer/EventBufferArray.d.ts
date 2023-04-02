import type { AddEventResult, EventBuffer, RecordingEvent } from '../types';
/**
 * A basic event buffer that does not do any compression.
 * Used as fallback if the compression worker cannot be loaded or is disabled.
 */
export declare class EventBufferArray implements EventBuffer {
    /** All the events that are buffered to be sent. */
    events: RecordingEvent[];
    constructor();
    /** @inheritdoc */
    get hasEvents(): boolean;
    /** @inheritdoc */
    destroy(): void;
    /** @inheritdoc */
    addEvent(event: RecordingEvent, isCheckout?: boolean): Promise<AddEventResult>;
    /** @inheritdoc */
    finish(): Promise<string>;
}
//# sourceMappingURL=EventBufferArray.d.ts.map