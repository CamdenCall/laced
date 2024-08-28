"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./DashboardNav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-19":{"id":"e-19","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2adef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2adef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718602536891},"e-20":{"id":"e-20","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2adef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2adef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718602536891},"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2ae5c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2ae5c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718610620609},"e-22":{"id":"e-22","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2ae5c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2ae5c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718610620609},"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"58cf9c30-00ea-0f03-4465-c5c3985737e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"58cf9c30-00ea-0f03-4465-c5c3985737e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718672715448},"e-26":{"id":"e-26","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"58cf9c30-00ea-0f03-4465-c5c3985737e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"58cf9c30-00ea-0f03-4465-c5c3985737e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718672715449},"e-27":{"id":"e-27","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ad325da9-4396-afde-a95d-1851de683331","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ad325da9-4396-afde-a95d-1851de683331","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718673873580},"e-28":{"id":"e-28","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ad325da9-4396-afde-a95d-1851de683331","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ad325da9-4396-afde-a95d-1851de683331","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718673873580},"e-35":{"id":"e-35","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"664fb44b512feba2a6822f14|a19622c2-015e-588f-b37c-0dd3f67ef350","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1719418591041},"e-36":{"id":"e-36","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"664fb44b512feba2a6822f14|a19622c2-015e-588f-b37c-0dd3f67ef350","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1719418591041}},"actionLists":{"a-8":{"id":"a-8","title":"Input Dropdown","actionItemGroups":[{"actionItems":[{"id":"a-8-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-social","selectorGuids":["895cad7c-7890-df1f-3063-6a35e9b25258"]},"value":"none"}},{"id":"a-8-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-social","selectorGuids":["895cad7c-7890-df1f-3063-6a35e9b25258"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-8-n","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":0,"unit":"px"},"target":{"objectId":"--border","useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adef"}}},{"id":"a-8-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["c92038bc-ea64-627d-b688-c40178ffde7d"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-social","selectorGuids":["895cad7c-7890-df1f-3063-6a35e9b25258"]},"widthValue":100,"heightValue":169,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-8-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-social","selectorGuids":["895cad7c-7890-df1f-3063-6a35e9b25258"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1718602539747},"a-9":{"id":"a-9","title":"Input Dropdown Close","actionItemGroups":[{"actionItems":[{"id":"a-9-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["c92038bc-ea64-627d-b688-c40178ffde7d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-9-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-social","selectorGuids":["895cad7c-7890-df1f-3063-6a35e9b25258"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-9-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-social","selectorGuids":["895cad7c-7890-df1f-3063-6a35e9b25258"]},"value":"none"}},{"id":"a-9-n-8","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"target":{"objectId":"--updateurl\\\\<deleted\\\\|variable-d2b50aba-497b-794b-1bca-c27d612ddb72\\\\>","useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adef"},"value":{"size":7.5,"unit":"px"}}},{"id":"a-9-n-3","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":7.5,"unit":"px"},"target":{"objectId":"--border","useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adef"}}},{"id":"a-9-n-5","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":1,"unit":"px"},"target":{"objectId":"--bordersize","useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adef"}}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718602539747},"a-10":{"id":"a-10","title":"Dropdown Time","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-time","selectorGuids":["93bd9e18-8f6c-75f2-367f-844ade0807f1"]},"value":"none"}},{"id":"a-10-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-time","selectorGuids":["93bd9e18-8f6c-75f2-367f-844ade0807f1"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-10-n-3","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":0,"unit":"px"},"target":{"objectId":"--timeborder","selector":".timezone-dropdown","selectorGuids":["0a3b0101-4f2f-5fee-db23-f1a870fe15af"]}}},{"id":"a-10-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["c92038bc-ea64-627d-b688-c40178ffde7d"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-10-n-5","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":0,"unit":"px"},"target":{"objectId":"--timesize","selector":".timezone-dropdown","selectorGuids":["0a3b0101-4f2f-5fee-db23-f1a870fe15af"]}}},{"id":"a-10-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-time","selectorGuids":["93bd9e18-8f6c-75f2-367f-844ade0807f1"]},"widthValue":100,"heightValue":167,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-10-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-time","selectorGuids":["93bd9e18-8f6c-75f2-367f-844ade0807f1"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1718602539747},"a-11":{"id":"a-11","title":"Dropdown Close Time","actionItemGroups":[{"actionItems":[{"id":"a-11-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["c92038bc-ea64-627d-b688-c40178ffde7d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-11-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-time","selectorGuids":["93bd9e18-8f6c-75f2-367f-844ade0807f1"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-11-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-time","selectorGuids":["93bd9e18-8f6c-75f2-367f-844ade0807f1"]},"value":"none"}},{"id":"a-11-n-4","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":7.5,"unit":"px"},"target":{"objectId":"--timeborder","useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adef"}}},{"id":"a-11-n-5","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":1,"unit":"px"},"target":{"objectId":"--timesize","useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adef"}}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718602539747},"a-12":{"id":"a-12","title":"Nav Dropdown","actionItemGroups":[{"actionItems":[{"id":"a-12-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-bottom","selectorGuids":["3942e4da-9d8f-298a-24f3-9becc0e53f43"]},"value":"none"}},{"id":"a-12-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-bottom","selectorGuids":["3942e4da-9d8f-298a-24f3-9becc0e53f43"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-12-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-bottom","selectorGuids":["3942e4da-9d8f-298a-24f3-9becc0e53f43"]},"value":"flex"}},{"id":"a-12-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeIn","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["c92038bc-ea64-627d-b688-c40178ffde7d"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-12-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-bottom","selectorGuids":["3942e4da-9d8f-298a-24f3-9becc0e53f43"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1718672718320},"a-13":{"id":"a-13","title":"Nav Dropdown Close","actionItemGroups":[{"actionItems":[{"id":"a-13-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-bottom","selectorGuids":["3942e4da-9d8f-298a-24f3-9becc0e53f43"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-13-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["c92038bc-ea64-627d-b688-c40178ffde7d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-13-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-bottom","selectorGuids":["3942e4da-9d8f-298a-24f3-9becc0e53f43"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718672718320}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DashboardNav({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "dashboardnav")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "dashboard-nav-container")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "nav-tabs")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "dashboard-tab")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "tab-icon")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/664fb6f0bf0df3a983ac63fe_dashboard-icon.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "tab-name")}
              tag="div"
            >
              {"Dashboard"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "dashboard-tab", "dropdown")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "dropdown-top")}
              data-w-id="58cf9c30-00ea-0f03-4465-c5c3985737e0"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "dropdown-name")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "tab-icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/664fb6f173963984bb2475a7_bio-link-icon.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "tab-name")}
                  tag="div"
                >
                  {"Bio Link"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Image
                className={_utils.cx(_styles, "dropdown-arrow")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/665429542603030ef3ee3668_dropdown.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "dropdown-bottom")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "dashboard-tab")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  loading="lazy"
                  width="15"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/66542dae32d74607a6944099_manage.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "tab-name")}
                  tag="div"
                >
                  {"Manage Link"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "dashboard-tab")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  loading="lazy"
                  width="15"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/65d43776ea20de5cb166f2b1_premium-badge.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "tab-name")}
                  tag="div"
                >
                  {"Premium"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "dashboard-tab")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "tab-icon")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/664fb80d68aeb6f3bb66c2dc_widges-icon.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "tab-name")}
              tag="div"
            >
              {"Widgets"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "dashboard-tab")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "tab-icon")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/664fb6f07c162ee164067405_settings-icon.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "tab-name")}
              tag="div"
            >
              {"Settings"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "sign-out")}
          button={true}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Sign Out"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
