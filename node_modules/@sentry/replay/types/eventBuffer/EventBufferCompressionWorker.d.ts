import type { ReplayRecordingData } from '@sentry/types';
import type { AddEventResult, EventBuffer, RecordingEvent } from '../types';
/**
 * Event buffer that uses a web worker to compress events.
 * Exported only for testing.
 */
export declare class EventBufferCompressionWorker implements EventBuffer {
    /** @inheritdoc */
    hasEvents: boolean;
    private _worker;
    constructor(worker: Worker);
    /**
     * Ensure the worker is ready (or not).
     * This will either resolve when the worker is ready, or reject if an error occured.
     */
    ensureReady(): Promise<void>;
    /**
     * Destroy the event buffer.
     */
    destroy(): void;
    /**
     * Add an event to the event buffer.
     *
     * Returns true if event was successfuly received and processed by worker.
     */
    addEvent(event: RecordingEvent, isCheckout?: boolean): Promise<AddEventResult>;
    /**
     * Finish the event buffer and return the compressed data.
     */
    finish(): Promise<ReplayRecordingData>;
    /**
     * Send the event to the worker.
     */
    private _sendEventToWorker;
    /**
     * Finish the request and return the compressed data from the worker.
     */
    private _finishRequest;
    /** Clear any pending events from the worker. */
    private _clear;
}
//# sourceMappingURL=EventBufferCompressionWorker.d.ts.map