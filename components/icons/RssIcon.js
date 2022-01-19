import BaseIcon from "./BaseIcon";

export default function RssIcon({ ...props }) {
  return (
    <BaseIcon width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        d="M3 19C4.10457 19 5 18.1046 5 17C5 15.8954 4.10457 15 3 15C1.89543 15 1 15.8954 1 17C1 18.1046 1.89543 19 3 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 7C7.627 7 13 12.373 13 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 1C10.941 1 19 9.059 19 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}
