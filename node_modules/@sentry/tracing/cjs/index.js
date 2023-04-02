Object.defineProperty(exports, '__esModule', { value: true });

const tracing = require('@sentry-internal/tracing');

const Integrations = {
  BrowserTracing: tracing.BrowserTracing,
  Apollo: tracing.Apollo,
  Express: tracing.Express,
  GraphQL: tracing.GraphQL,
  Mongo: tracing.Mongo,
  Mysql: tracing.Mysql,
  Postgres: tracing.Postgres,
  Prisma: tracing.Prisma,
};

// Treeshakable guard to remove all code related to tracing

// Guard for tree
if (typeof __SENTRY_TRACING__ === 'undefined' || __SENTRY_TRACING__) {
  // We are patching the global object with our hub extension methods
  tracing.addExtensionMethods();
}

exports.BROWSER_TRACING_INTEGRATION_ID = tracing.BROWSER_TRACING_INTEGRATION_ID;
exports.BrowserTracing = tracing.BrowserTracing;
exports.IdleTransaction = tracing.IdleTransaction;
exports.Span = tracing.Span;
exports.SpanStatus = tracing.SpanStatus;
exports.TRACEPARENT_REGEXP = tracing.TRACEPARENT_REGEXP;
exports.Transaction = tracing.Transaction;
exports.addExtensionMethods = tracing.addExtensionMethods;
exports.defaultRequestInstrumentationOptions = tracing.defaultRequestInstrumentationOptions;
exports.extractTraceparentData = tracing.extractTraceparentData;
exports.getActiveTransaction = tracing.getActiveTransaction;
exports.hasTracingEnabled = tracing.hasTracingEnabled;
exports.instrumentOutgoingRequests = tracing.instrumentOutgoingRequests;
exports.spanStatusfromHttpCode = tracing.spanStatusfromHttpCode;
exports.startIdleTransaction = tracing.startIdleTransaction;
exports.stripUrlQueryAndFragment = tracing.stripUrlQueryAndFragment;
exports.Integrations = Integrations;
//# sourceMappingURL=index.js.map
