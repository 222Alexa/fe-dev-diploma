import React, { useRef, useState } from "react";
import Tooltip from "../Tooltip";
const WagonServices = ({ className, data }) => {
  /**группа кнопок для выбор допопций в вагонах */

  const [options, setOptions] = useState([
    {
      name: "conditioning",
      price: "",
      have_air_conditioning: data.have_air_conditioning,
      selected: false,
      highlight: { fill: "none", color: "#292929" },
    },

    {
      name: "wifi",
      price: data.wifi_price,
      have_wifi: data.have_wifi,
      selected: false,
    },
    {
      name: "linens",
      price: data.linens_price,
      is_linens_included: data.is_linens_included,
      selected: false,
    },
    {
      name: "coffee",
      price: 0,
      have_coffee: false,
      selected: false,
    },
  ]);
  const tooltipRef = useRef();


  const clickHandler = (event) => {
    let idx = options.findIndex((i) => {
      return i.name === event.target.dataset.name;
    });

    let item = options[idx];
    item.selected = !options[idx].selected;

    setOptions((prevState) => {
      const items = [...prevState];
      items[idx] = item;
      return items;
    });

  };
  const onMouseOver = (event) => {
    event.preventDefault();
    tooltipRef.current = event.target.dataset.name;
   
    document
      .querySelector(".tooltip_" + tooltipRef.current)
      .classList.add("visible");
  };
  const onMouseOut = (event) => {
    event.preventDefault();
    document
      .querySelector(".tooltip_" + tooltipRef.current)
      .classList.remove("visible");
 
  };
 
  return (
    <React.Fragment>
      <div className={className + "_services-block"}>
        <div className={className + "_services-block_title"}>
          <span className={"services-block_title_normal"}>Обслуживание</span>
          <span className={"services-block_title_light"}>ФПК</span>
        </div>{" "}
        <div
          className="btn-desk services-buttons"
          role="group"
          aria-label="Basic example"
        >
          <div className="services-button_wrap">
            <button
              ref={tooltipRef}
              data-name="conditioning"
              type="button"
              disabled={
                options[0].have_air_conditioning === false ? true : false
              }
              className={
                options[0].selected
                  ? "btn wagon-services_btn selected"
                  : "btn wagon-services_btn"
              }
              onClick={clickHandler}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            >
              <svg
                data-name="conditioning"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-name="conditioning"
                  d="M8.0993 11.641C7.71469 11.8691 7.35884 12.0788 7.00299 12.2885C6.38474 12.6527 5.77369 13.0205 5.15184 13.3774C5.02963 13.4473 4.9865 13.5319 4.97931 13.6643C4.93258 14.3964 4.87867 15.1321 4.82834 15.8642C4.79959 16.2946 4.49406 16.5889 4.08788 16.5742C3.69249 16.5595 3.40134 16.2284 3.41572 15.798C3.4301 15.4632 3.45526 15.1248 3.47683 14.79C3.48402 14.6576 3.4912 14.5251 3.49839 14.3633C3.39056 14.4258 3.30789 14.47 3.22521 14.5178C2.68245 14.8378 2.13969 15.1616 1.59333 15.4816C1.31296 15.6435 0.989462 15.603 0.759416 15.3897C0.547343 15.1947 0.453887 14.8489 0.590477 14.584C0.66596 14.4369 0.795361 14.2934 0.935545 14.2051C1.49269 13.8556 2.06061 13.5319 2.62494 13.1971C2.67526 13.1677 2.72558 13.1346 2.79388 13.0941C2.36973 12.8807 1.96715 12.6821 1.56457 12.4798C1.21232 12.2995 1.05776 11.9537 1.1584 11.5969C1.28061 11.1738 1.73351 10.9604 2.13969 11.1554C2.80107 11.4718 3.45526 11.8029 4.10945 12.134C4.23526 12.2002 4.33231 12.1965 4.45452 12.1229C5.3747 11.5711 6.29848 11.0303 7.21866 10.4859C7.26898 10.4564 7.3193 10.4233 7.39479 10.3755C7.1935 10.2578 7.01018 10.1474 6.82686 10.0407C6.03968 9.57354 5.24889 9.11369 4.4653 8.63913C4.32871 8.55452 4.22447 8.56188 4.08788 8.63177C3.45167 8.95918 2.81185 9.27556 2.16844 9.58825C1.78743 9.77587 1.37766 9.63975 1.20153 9.27556C1.01822 8.904 1.16559 8.48462 1.5502 8.28597C1.90245 8.10203 2.25831 7.92913 2.61056 7.74887C2.66448 7.72312 2.7148 7.69369 2.78669 7.65322C2.24393 7.33317 1.72273 7.02415 1.20153 6.71514C1.10448 6.65628 1.00384 6.6011 0.906789 6.53856C0.547343 6.31783 0.428726 5.89478 0.622827 5.54161C0.820522 5.18477 1.24826 5.07073 1.61849 5.2841C2.20079 5.62255 2.7795 5.96835 3.35821 6.31047C3.39415 6.33255 3.4301 6.35094 3.49839 6.39141C3.47683 6.03457 3.45885 5.71084 3.44088 5.38343C3.4301 5.22892 3.41572 5.07809 3.41213 4.92358C3.40494 4.51892 3.69249 4.19519 4.07351 4.17679C4.47249 4.1584 4.7924 4.44534 4.82115 4.85736C4.87507 5.60783 4.92899 6.36198 4.97572 7.11244C4.9829 7.23752 5.02963 7.30742 5.13747 7.36628C6.06843 7.91074 6.99221 8.45887 7.91958 9.00701C7.9699 9.03644 8.02022 9.06587 8.09571 9.10633C8.0993 9.0254 8.10649 8.96654 8.10649 8.91136C8.10649 7.81509 8.10289 6.71514 8.11008 5.61887C8.11008 5.48643 8.06695 5.40918 7.95912 5.3356C7.35165 4.9199 6.74419 4.5042 6.14392 4.08115C5.68742 3.76109 5.72336 3.08788 6.20502 2.83405C6.46023 2.70161 6.71543 2.72368 6.95267 2.88555C7.27617 3.10627 7.59967 3.327 7.92317 3.54773C7.9699 3.58083 8.02022 3.61394 8.10649 3.66912C8.10649 3.57348 8.10649 3.50726 8.10649 3.44472C8.10649 2.78254 8.10289 2.12037 8.10649 1.45819C8.11008 0.957879 8.48031 0.62679 8.93321 0.704044C9.24953 0.755547 9.49036 1.02778 9.51552 1.35886C9.51911 1.40669 9.51552 1.45819 9.51552 1.50601C9.51552 7.41778 9.51552 13.3259 9.51552 19.2376C9.51552 19.6349 9.34658 19.9145 9.03745 20.0175C8.56658 20.1794 8.10649 19.8373 8.1029 19.3149C8.0993 18.6454 8.1029 17.9795 8.1029 17.31C8.1029 17.2438 8.1029 17.1812 8.1029 17.0708C7.85128 17.2438 7.63202 17.3909 7.41635 17.5381C7.26179 17.6447 7.11082 17.7514 6.95267 17.8544C6.58963 18.0972 6.16189 18.0236 5.93903 17.6815C5.70899 17.332 5.80604 16.8943 6.17267 16.6404C6.77295 16.2247 7.37322 15.8127 7.9699 15.3933C8.03101 15.3492 8.09571 15.2535 8.09571 15.1836C8.1029 14.0432 8.10289 12.9028 8.0993 11.7624C8.11008 11.7366 8.10649 11.7072 8.0993 11.641Z"
                  fill={options[0].selected ? "#F4F2F6" : "#292929"}
                />
                <path
                  data-name="conditioning"
                  d="M19.1595 5.619C18.9474 5.87652 18.7137 6.11564 18.5268 6.38787C18.2536 6.79253 17.9697 7.20455 17.7648 7.64968C17.4161 8.40383 17.6102 9.11015 18.2501 9.62885C18.8324 10.1034 19.5153 10.3609 20.2198 10.5706C20.3025 10.5964 20.3888 10.6184 20.4211 10.6295C19.8496 10.887 19.2529 11.1482 18.6634 11.4278C18.4873 11.5124 18.3255 11.6411 18.1746 11.7699C17.621 12.2371 17.4485 12.8478 17.6749 13.5504C17.8619 14.139 18.2141 14.6246 18.5987 15.0881C18.7641 15.2868 18.9438 15.4744 19.1487 15.6988C18.8935 15.6473 18.6778 15.5958 18.4585 15.559C17.8906 15.4634 17.3227 15.3861 16.744 15.456C15.9208 15.559 15.3925 16.0777 15.2774 16.9165C15.1696 17.7111 15.3062 18.48 15.5003 19.2415C15.5111 19.2819 15.5183 19.3224 15.5398 19.4033C15.3421 19.2231 15.1768 19.0649 15.0043 18.9177C14.5657 18.5425 14.1128 18.193 13.588 17.9576C12.7649 17.5897 12.0496 17.792 11.5212 18.5388C11.1402 19.0759 10.9066 19.6829 10.7197 20.312C10.7017 20.3672 10.6873 20.426 10.6514 20.4738C10.6514 19.2562 10.6514 18.0422 10.6514 16.8098C12.5744 16.7436 14.156 15.9674 15.3565 14.4296C16.2587 13.2708 16.6901 11.9354 16.6505 10.4529C16.5643 7.06844 13.7965 4.41973 10.6586 4.43812C10.6586 3.16527 10.6586 1.89242 10.6586 0.579102C10.6873 0.656356 10.7053 0.700501 10.7161 0.744646C10.9389 1.46568 11.2013 2.16833 11.6434 2.78268C12.1574 3.49268 12.844 3.68765 13.642 3.34553C14.289 3.06962 14.8245 2.63185 15.3206 2.13522C15.3889 2.06532 15.4572 1.9991 15.5255 1.92921C15.5326 1.92185 15.547 1.92185 15.5614 1.91817C15.4967 2.28605 15.4068 2.65024 15.3781 3.01812C15.3421 3.49268 15.3134 3.9746 15.3601 4.44548C15.4392 5.24377 15.9748 5.75144 16.7584 5.8618C17.5024 5.96481 18.2249 5.84341 18.9438 5.65579C19.0085 5.6374 19.0696 5.62268 19.1343 5.60797C19.1379 5.60797 19.1451 5.61165 19.1595 5.619Z"
                  fill={options[0].selected ? "#F4F2F6" : "#292929"}
                />
                <path
                  data-name="conditioning"
                  d="M10.655 15.5333C10.655 12.2666 10.655 8.99614 10.655 5.69629C12.3624 5.77722 13.7427 6.47986 14.6521 7.95505C15.752 9.73925 15.7268 11.5749 14.6233 13.3555C13.5594 15.0624 11.701 15.6069 10.655 15.5333Z"
                  fill={options[0].selected ? "#F4F2F6" : "#292929"}
                />
              </svg>
            </button>

            <Tooltip name="conditioning" text="кондиционер" />
          </div>
          <div className="services-button_wrap">
            <button
              data-name="wifi"
              type="button"
              className={
                options[1].selected
                  ? "btn wagon-services_btn selected"
                  : "btn wagon-services_btn"
              }
              disabled={
                !options[1].have_air_wifi && !options[1].wifi_price
                  ? false
                  : true
              }
              onClick={clickHandler}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            >
              <svg
                data-name="wifi"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-name="wifi"
                  d="M19.4737 4.46617C19.2528 4.67493 19.0318 4.88369 18.8171 5.09878C18.6024 5.31387 18.4004 5.54161 18.1731 5.78833C15.8686 3.5552 13.16 2.37854 9.99058 2.37854C6.83374 2.37854 4.13779 3.5552 1.89644 5.72507C1.44817 5.28224 1.01883 4.85206 0.526367 4.35862C1.20825 3.82723 1.87118 3.22624 2.60988 2.73281C7.86918 -0.759218 14.6501 -0.151909 19.2338 4.20047C19.3096 4.27006 19.3917 4.33332 19.4737 4.39658C19.4737 4.42188 19.4737 4.44086 19.4737 4.46617Z"
                  fill={options[1].selected ? "#F4F2F6" : "#292929"}
                />
                <path
                  data-name="wifi"
                  d="M9.68719 15.4735C9.60511 15.4356 9.52304 15.3913 9.43464 15.3533C8.76539 15.0687 8.39289 14.3665 8.53179 13.6516C8.67069 12.9431 9.29574 12.4307 10.0218 12.4307C10.7416 12.437 11.3666 12.9557 11.4992 13.6643C11.6318 14.3728 11.2467 15.075 10.5711 15.3533C10.4827 15.3913 10.4006 15.4292 10.3122 15.4672C10.1039 15.4735 9.89554 15.4735 9.68719 15.4735Z"
                  fill={options[1].selected ? "#F4F2F6" : "#292929"}
                />
                <path
                  data-name="wifi"
                  d="M4.56084 8.40099C4.11257 7.95816 3.68324 7.53431 3.25391 7.10413C6.51808 3.5615 12.8507 3.09336 16.7399 7.06617C16.3043 7.49635 15.8623 7.92653 15.4141 8.36936C13.9367 6.9523 12.1246 6.15521 9.99061 6.16154C7.8629 6.16786 6.05718 6.95863 4.56084 8.40099Z"
                  fill={options[1].selected ? "#F4F2F6" : "#292929"}
                />
                <path
                  data-name="wifi"
                  d="M14.1069 9.76737C13.6586 10.2102 13.2293 10.6404 12.8 11.0642C11.1142 9.47004 8.68343 9.64085 7.22497 11.0579C6.79564 10.6277 6.36631 10.2039 5.93066 9.7737C7.66061 7.74301 11.6319 7.23059 14.1069 9.76737Z"
                  fill={options[1].selected ? "#F4F2F6" : "#292929"}
                />
              </svg>
            </button>
            <Tooltip name="wifi" text="WI-FI" />
          </div>
          <div className="services-button_wrap">
            <button
              data-name="linens"
              type="button"
              className={
                options[2].is_linens_included
                  ? "btn wagon-services_btn included"
                  : options[2].selected
                  ? "btn wagon-services_btn selected"
                  : "btn wagon-services_btn"
              }
              onClick={clickHandler}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            >
              <svg
                data-name="linens"
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill={
                  options[2].is_linens_included === true
                    ? "rgba(255, 168, 0, 0.79)"
                    : "none"
                }
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-name="linens"
                  d="M20.5451 12.1613C20.6816 12.5772 20.8554 13.1645 21.054 13.7395C21.3642 14.6815 20.7313 15.6235 19.7261 15.6235C14.4765 15.6357 9.21459 15.6357 3.96506 15.6113C2.1904 15.599 0.936965 14.7304 0.65153 13.2256C0.515017 12.5283 0.589479 11.7575 0.725991 11.0602C1.17276 8.68681 1.69399 6.32564 2.20281 3.95225C2.28968 3.53629 2.42619 3.12033 2.61235 2.74108C2.99706 1.9581 3.56793 1.43204 4.52352 1.28523C5.33019 1.16289 6.11203 0.857043 6.89388 0.600129C7.39029 0.428853 7.84946 0.404385 8.30864 0.698001C9.15254 1.24853 10.0709 1.38311 11.0761 1.35864C13.31 1.3097 15.5438 1.3464 17.7777 1.35864C18.5719 1.35864 18.5719 1.37087 18.7953 2.10491C19.0807 3.08363 19.3537 4.06235 19.6516 5.04107C19.7261 5.26129 19.8874 5.45703 20.0239 5.65277C20.3342 6.08096 20.7437 6.44798 20.9423 6.91288C21.4759 8.13628 21.4883 9.45755 21.3394 10.7666C21.2897 11.1948 20.8926 11.574 20.5451 12.1613ZM1.63194 10.1794C2.72404 9.33521 3.87819 9.27404 5.06957 9.28627C9.78546 9.29851 14.5013 9.28627 19.2048 9.29851C19.664 9.29851 20.1356 9.35968 20.7313 9.39638C20.6196 8.72351 20.5575 8.09958 20.3962 7.50011C20.0487 6.20331 19.1924 5.70171 17.8645 6.03203C16.9462 6.26448 16.0154 6.50916 15.1715 6.90064C12.6522 8.06287 10.0337 7.87936 7.4027 7.54905C7.11726 7.51234 7.00557 7.36554 7.0428 7.09639C7.08003 6.79054 7.11726 6.49692 7.14208 6.19107C7.21654 5.11448 7.30341 4.03789 7.36547 2.96129C7.39029 2.423 7.36547 1.87247 7.36547 1.24853C7.10485 1.33417 6.89388 1.39534 6.6829 1.45651C5.96311 1.65225 5.25573 1.8847 4.53593 2.03151C3.95265 2.14161 3.54311 2.43523 3.31973 2.94906C3.14599 3.34055 3.00947 3.74427 2.91019 4.16023C2.72404 4.9065 2.58753 5.66501 2.42619 6.42352C2.17799 7.63468 1.91737 8.83362 1.63194 10.1794ZM11.6594 14.9139C14.2035 14.9139 16.7476 14.9139 19.2917 14.9139C19.453 14.9139 19.6268 14.9262 19.7881 14.9017C20.148 14.8527 20.4459 14.498 20.3962 14.1676C20.3466 13.8251 20.1356 13.6293 19.7633 13.6416C19.602 13.6416 19.4282 13.6416 19.2669 13.6416C14.4889 13.6538 9.711 13.666 4.93306 13.666C4.64762 13.666 4.34978 13.6905 4.06434 13.6538C3.46865 13.5926 3.03429 13.0788 3.0467 12.4671C3.05911 11.8799 3.43142 11.4884 4.05193 11.4517C4.68486 11.415 5.33019 11.3783 5.97552 11.3661C10.5425 11.3171 15.1094 11.2804 19.6764 11.2315C19.7757 11.2315 19.8874 11.2315 19.9867 11.2192C20.3466 11.1825 20.6444 10.9012 20.6568 10.6075C20.6568 10.2161 20.3714 10.0937 20.0611 10.0081C19.9246 9.97138 19.7757 9.97138 19.6268 9.97138C14.4393 9.97138 9.23941 9.95915 4.05193 9.99585C3.51829 9.99585 2.94742 10.1916 2.47583 10.4485C0.999016 11.2682 0.874914 13.4091 2.20281 14.3634C2.74886 14.7549 3.4066 14.8772 4.07675 14.8772C6.60844 14.9139 9.14013 14.9139 11.6594 14.9139ZM8.14731 1.46874C8.03562 3.32831 7.92393 5.09001 7.81223 6.81501C11.163 7.54905 14.1911 6.79054 17.0827 5.37139C14.0173 4.45384 11.2002 2.85119 8.14731 1.46874ZM19.7136 11.9655C19.453 11.9655 19.2296 11.9655 18.9939 11.9655C17.1323 11.99 15.2708 12.0389 13.4092 12.0512C10.5425 12.0756 7.67572 12.0756 4.79655 12.1001C4.54834 12.1001 4.28773 12.1001 4.06434 12.1857C3.94024 12.2347 3.77891 12.4426 3.79132 12.565C3.80373 12.6996 3.96506 12.8708 4.10157 12.9442C4.21327 13.0054 4.38701 12.9687 4.52352 12.9687C9.52485 12.9565 14.5386 12.9565 19.5399 12.9442C19.6888 12.9442 19.8377 12.9075 20.0115 12.8953C19.9494 12.6873 19.9122 12.5283 19.8626 12.3692C19.8253 12.2469 19.7757 12.1368 19.7136 11.9655ZM11.3243 2.06821C11.3119 2.10491 11.3119 2.15385 11.2995 2.19055C13.7319 3.35278 16.1519 4.53948 18.9194 5.11448C18.6464 4.14799 18.4106 3.24267 18.1127 2.36183C18.0631 2.21502 17.7652 2.08044 17.5791 2.08044C15.4942 2.06821 13.4092 2.06821 11.3243 2.06821Z"
                  fill={options[2].selected ? "#F4F2F6" : "#292929"}
                />
              </svg>
            </button>

            <Tooltip name="linens" text="бельё" />
          </div>
          <div className="services-button_wrap">
            <button
              data-name="coffee"
              type="button"
              className={
                options[3].selected
                  ? "btn wagon-services_btn selected"
                  : "btn wagon-services_btn"
              }
              onClick={clickHandler}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            >
              <svg
                data-name="coffee"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-name="coffee"
                  d="M2.39887 0.526367C2.65965 0.526367 2.84931 0.526367 3.03897 0.526367C7.78042 0.526367 12.5219 0.526367 17.2633 0.526367C18.745 0.526367 19.4681 1.25024 19.4681 2.75733C19.4681 3.56428 19.48 4.38309 19.4681 5.19003C19.4562 6.37671 18.6739 7.15992 17.5004 7.17179C16.9077 7.18366 16.3269 7.17179 15.6868 7.17179C15.6868 8.0974 15.6868 8.95182 15.6868 9.81809C15.6749 12.1915 14.0747 13.8053 11.7158 13.8172C9.93778 13.8172 8.15973 13.8291 6.38169 13.8172C4.04652 13.8053 2.42258 12.2033 2.42258 9.87743C2.38702 6.78019 2.39887 3.70668 2.39887 0.526367ZM15.7223 2.43693C15.7223 3.36254 15.7223 4.30002 15.7223 5.2375C16.3387 5.2375 16.9314 5.2375 17.5241 5.2375C17.5241 4.28815 17.5241 3.36254 17.5241 2.43693C16.9077 2.43693 16.3387 2.43693 15.7223 2.43693Z"
                  fill={options[3].selected ? "#F4F2F6" : "#292929"}
                />
                <path
                  data-name="coffee"
                  d="M17.5363 15.7515C17.5363 16.3685 17.5363 16.9619 17.5363 17.579C11.8584 17.579 6.20426 17.579 0.526367 17.579C0.526367 16.9619 0.526367 16.3804 0.526367 15.7515C6.18055 15.7515 11.8347 15.7515 17.5363 15.7515Z"
                  fill={options[3].selected ? "#F4F2F6" : "#292929"}
                />
              </svg>
            </button>

            <Tooltip name="coffee" text="питание" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default WagonServices;

/**  */
