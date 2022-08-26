function createDateId({ timeZone, locale } = {}) {
  const dateInMilliseconds = Date.now();

  const date = new Intl.DateTimeFormat(locale || 'en-US', {
    timeZone: timeZone || 'America/Chicago',
    timeZoneName: 'short',
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date())
    .replace(/\//g, '-');

  return `${dateInMilliseconds} (${date})`;
}

module.exports = createDateId;
