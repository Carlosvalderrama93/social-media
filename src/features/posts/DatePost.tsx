import { formatDistanceToNow } from "date-fns";

function DatePost({ timestamp }: { timestamp: string }) {
  const timePeriod = formatDistanceToNow(timestamp);

  return (
    <span title={timestamp}>
      <i>{`${timePeriod} ago`}</i>
    </span>
  );
}

export default DatePost;
