const {
  STATSD_GRAPHITE_HOST,
  STATSD_GRAPHITE_PORT,
  STATSD_GRAPHITE_PICKLE_PORT,
  STATSD_GRAPHITE_PROTOCOL,
  STATSD_GRAPHITE_BACKENDS,
  STATSD_GRAPHITE_DEBUG,
  STATSD_GRAPHITE_MANAGEMENT_ADDRESS,
  STATSD_GRAPHITE_MANAGEMENT_PORT,
  STATSD_GRAPHITE_TITLE,
  STATSD_GRAPHITE_HEALTH_STATUS,
  STATSD_GRAPHITE_DUMP_MESSAGES,
  STATSD_GRAPHITE_FLUSH_INTERVAL,
  STATSD_GRAPHITE_PERCENT_THRESHOLD,
  STATSD_GRAPHITE_FLUSH_COUNTS,
  STATSD_GRAPHITE_DELETE_GAUGES,
  STATSD_GRAPHITE_GAUGES_MAX_TTL,
  STATSD_GRAPHITE_DELETE_TIMERS,
  STATSD_GRAPHITE_DELETE_SETS,
  STATSD_GRAPHITE_DELETE_COUNTERS,
  STATSD_GRAPHITE_PREFIX_STATS,
  STATSD_GRAPHITE_KEY_NAME_SANITIZE,
  STATSD_GRAPHITE_CALCULATED_TIMER_METRICS,
  STATSD_GRAPHITE_REPEATER_PROTOCOL,
  STATSD_GRAPHITE_SERVERS,
  STATSD_GRAPHITE_KEY_FLUSH,
  STATSD_GRAPHITE_PRETTY_PRINT,
  STATSD_GRAPHITE_DELETE_IDLE_STATS,
  STATSD_GRAPHITE_AUTOMATIC_CONFIG_RELOAD,
  STATSD_GRAPHITE_LOG,
  STATSD_GRAPHITE_CONFIG,
  STATSD_GRAPHITE_REPEATER,
  STATSD_GRAPHITE_HISTOGRAM,
} = process.env;

exports.exec = function() {
  let config = {};

  // Graphite Required Variables
  config.graphiteHost = STATSD_GRAPHITE_HOST || "graphite";

  // Graphite Optional Variables
  // Strings
  STATSD_GRAPHITE_PORT && (config.graphitePort = STATSD_GRAPHITE_PORT);
  STATSD_GRAPHITE_PICKLE_PORT && (config.graphitePicklePort = STATSD_GRAPHITE_PICKLE_PORT);
  STATSD_GRAPHITE_PROTOCOL && (config.graphiteProtocol = STATSD_GRAPHITE_PROTOCOL);
  STATSD_GRAPHITE_MANAGEMENT_ADDRESS && (config.mgmt_address = STATSD_GRAPHITE_MANAGEMENT_ADDRESS);
  STATSD_GRAPHITE_MANAGEMENT_PORT && (config.mgmt_port = STATSD_GRAPHITE_MANAGEMENT_PORT);
  STATSD_GRAPHITE_TITLE && (config.title = STATSD_GRAPHITE_TITLE);
  STATSD_GRAPHITE_HEALTH_STATUS && (config.healthStatus = STATSD_GRAPHITE_HEALTH_STATUS);
  STATSD_GRAPHITE_FLUSH_INTERVAL && (config.flushInterval = STATSD_GRAPHITE_FLUSH_INTERVAL);
  STATSD_GRAPHITE_PERCENT_THRESHOLD && (config.percentThreshold = STATSD_GRAPHITE_PERCENT_THRESHOLD);
  STATSD_GRAPHITE_FLUSH_COUNTS && (config.flushCounts = STATSD_GRAPHITE_FLUSH_COUNTS);
  STATSD_GRAPHITE_DELETE_IDLE_STATS && (config.deleteIdleStats = STATSD_GRAPHITE_DELETE_IDLE_STATS);
  STATSD_GRAPHITE_DELETE_GAUGES && (config.deleteGauges = STATSD_GRAPHITE_DELETE_GAUGES);
  STATSD_GRAPHITE_GAUGES_MAX_TTL && (config.gaugesMaxTTL = STATSD_GRAPHITE_GAUGES_MAX_TTL);
  STATSD_GRAPHITE_DELETE_TIMERS && (config.deleteTimers = STATSD_GRAPHITE_DELETE_TIMERS);
  STATSD_GRAPHITE_DELETE_SETS && (config.deleteSets = STATSD_GRAPHITE_DELETE_SETS);
  STATSD_GRAPHITE_DELETE_COUNTERS && (config.deleteCounters = STATSD_GRAPHITE_DELETE_COUNTERS);
  STATSD_GRAPHITE_PREFIX_STATS && (config.prefixStats = STATSD_GRAPHITE_PREFIX_STATS);
  STATSD_GRAPHITE_KEY_NAME_SANITIZE && (config.keyNameSanitize = STATSD_GRAPHITE_KEY_NAME_SANITIZE);
  STATSD_GRAPHITE_CALCULATED_TIMER_METRICS && (config.calculatedTimerMetrics = STATSD_GRAPHITE_CALCULATED_TIMER_METRICS);
  STATSD_GRAPHITE_REPEATER_PROTOCOL && (config.repeaterProtocol = STATSD_GRAPHITE_REPEATER_PROTOCOL);

  // Arrays
  STATSD_GRAPHITE_BACKENDS && (config.graphiteBackends = STATSD_GRAPHITE_BACKENDS.split(","));

  // Booleans
  STATSD_GRAPHITE_DEBUG && (config.debug = assignBool(STATSD_GRAPHITE_DEBUG));
  STATSD_GRAPHITE_DUMP_MESSAGES && (config.dumpMessages = assignBool(STATSD_GRAPHITE_DUMP_MESSAGES));
  STATSD_GRAPHITE_AUTOMATIC_CONFIG_RELOAD && (config.automaticConfigReload = assignBool(STATSD_GRAPHITE_AUTOMATIC_CONFIG_RELOAD));
  STATSD_GRAPHITE_PRETTY_PRINT && (config.console = { prettyPrint: assignBool(STATSD_GRAPHITE_PRETTY_PRINT) });

  // Objects
  STATSD_GRAPHITE_SERVERS && (config.servers = assignObject(STATSD_GRAPHITE_SERVERS));
  STATSD_GRAPHITE_KEY_FLUSH && (config.keyFlush = assignObject(STATSD_GRAPHITE_KEY_FLUSH));
  STATSD_GRAPHITE_LOG && (config.log = assignObject(STATSD_GRAPHITE_LOG));
  STATSD_GRAPHITE_CONFIG && (config.graphite = assignObject(STATSD_GRAPHITE_CONFIG));
  STATSD_GRAPHITE_REPEATER && (config.repeater = assignObject(STATSD_GRAPHITE_REPEATER));
  STATSD_GRAPHITE_HISTOGRAM && (config.histogram = assignObject(STATSD_GRAPHITE_HISTOGRAM));

  return config;
}

function assignBool(value) { 
  return (value === "true"); 
}

function assignObject(value) { 
  return JSON.parse(value); 
}
