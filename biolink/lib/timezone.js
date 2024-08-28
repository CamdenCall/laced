import moment from 'moment-timezone';

export const getTimeZone = (timezoneName) => {
  const timezoneMap = {
    'Eastern Time': 'America/New_York',
    'Central Time': 'America/Chicago',
    'Mountain Time': 'America/Denver',
    'Pacific Time': 'America/Los_Angeles',
  };

  if (timezoneMap.hasOwnProperty(timezoneName)) {
    const currentTime = moment().tz(timezoneMap[timezoneName]).format('hh:mm:ss A');
    return { currentTime };
  } else {
    return { error: 'Invalid timezone name' };
  }
};

export default getTimeZone;