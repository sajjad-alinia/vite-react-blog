type className = {
  className?: string;
};

export const LogoIcon = ({ className }: className) => {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 22.152 1.40577 25.9756 3.76732 29.021L7.73554 14.0299C9.38672 7.52344 13.6758 4.15725 20.5616 4.15725H22.936C27.7785 4.15725 31.335 8.70307 30.1698 13.4033C29.9609 14.2463 29.5702 15.0334 29.0253 15.7097L27.0045 18.2174C26.486 18.8609 26.2968 19.7092 26.493 20.5121L27.109 23.0338C27.4278 24.339 27.3695 25.708 26.941 26.9814C25.4832 31.3132 21.4227 34.231 16.8521 34.231H10.2086C12.5662 35.3648 15.2089 36 18 36Z"
        fill="currentcolor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7 21.7592H14.1932C13.0747 21.7592 12.0968 22.5135 11.8129 23.5953L10.4373 28.8354H15.871C17.8811 28.8354 19.6384 27.4799 20.1487 25.5357L20.2666 25.0865C20.7082 23.4043 19.4392 21.7592 17.7 21.7592ZM16.6646 23.3514H14.759C14.1206 23.3514 13.5623 23.7814 13.3993 24.3988L12.6486 27.2432H15.6532C16.7647 27.2432 17.7364 26.4977 18.0186 25.4284L18.0838 25.1814C18.328 24.2562 17.6263 23.3514 16.6646 23.3514Z"
        fill="currentcolor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9971 11.7427C15.2811 10.6609 16.2589 9.90663 17.3774 9.90663H20.8843C22.6235 9.90663 23.8925 11.5517 23.4509 13.2339L23.333 13.6831C22.8227 15.6273 21.0654 16.9828 19.0553 16.9828H13.6216L14.9971 11.7427ZM16.5836 12.5462C16.7465 11.9289 17.3049 11.4988 17.9433 11.4988H19.8489C20.8106 11.4988 21.5123 12.4036 21.2681 13.3288L21.2029 13.5758C20.9207 14.6451 19.949 15.3907 18.8375 15.3907H15.8329L16.5836 12.5462Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export const MoonIcon = ({ className }: className) => {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SunIcon = ({ className }: className) => {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DesktopIcon = ({ className }: className) => {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M17.5 3.00006H6.5C5.37366 2.93715 4.26817 3.32249 3.42502 4.07196C2.58187 4.82143 2.06958 5.87411 2 7.00006V13.0001C2.06958 14.126 2.58187 15.1787 3.42502 15.9282C4.26817 16.6776 5.37366 17.063 6.5 17.0001H17.5C18.6263 17.063 19.7318 16.6776 20.575 15.9282C21.4181 15.1787 21.9304 14.126 22 13.0001V7.00006C21.9304 5.87411 21.4181 4.82143 20.575 4.07196C19.7318 3.32249 18.6263 2.93715 17.5 3.00006V3.00006Z"
        stroke="currentcolor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M12 17V21" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.9004 21H7.90039" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
