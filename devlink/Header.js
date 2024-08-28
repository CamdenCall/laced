"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Header.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"349784da-0ecc-6eb2-48f5-27df6fc35179","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"349784da-0ecc-6eb2-48f5-27df6fc35179","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716352311147},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"349784da-0ecc-6eb2-48f5-27df6fc35179","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"349784da-0ecc-6eb2-48f5-27df6fc35179","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716352311148},"e-5":{"id":"e-5","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ad325da9-4396-afde-a95d-1851de683327","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ad325da9-4396-afde-a95d-1851de683327","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716784229030},"e-6":{"id":"e-6","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ad325da9-4396-afde-a95d-1851de683327","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ad325da9-4396-afde-a95d-1851de683327","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716784229030},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1efdea69-a0f9-45bb-01ed-3be2fe2b8b06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1efdea69-a0f9-45bb-01ed-3be2fe2b8b06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718739590034},"e-30":{"id":"e-30","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1efdea69-a0f9-45bb-01ed-3be2fe2b8b06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1efdea69-a0f9-45bb-01ed-3be2fe2b8b06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718739590034}},"actionLists":{"a":{"id":"a","title":"Dropdown Menu","actionItemGroups":[{"actionItems":[{"id":"a-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-back","selectorGuids":["0de8a160-8c83-a4f5-ae30-62d74aa431ea"]},"value":"none"}},{"id":"a-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-cover","selectorGuids":["734716ff-7468-9c60-ed75-ab39ff4ee338"]},"value":"none"}},{"id":"a-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-popup","selectorGuids":["d0c88fc1-14b2-7854-2e55-6d1fa65870b3"]},"value":"none"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-back","selectorGuids":["0de8a160-8c83-a4f5-ae30-62d74aa431ea"]},"yValue":90,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-popup","selectorGuids":["d0c88fc1-14b2-7854-2e55-6d1fa65870b3"]},"xValue":400,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-cover","selectorGuids":["734716ff-7468-9c60-ed75-ab39ff4ee338"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeIn","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".menu-front","selectorGuids":["c6a8d08f-a725-bc0e-d0eb-19646b48cd9b"]},"yValue":90,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":350,"target":{"selector":".nav-cover","selectorGuids":["734716ff-7468-9c60-ed75-ab39ff4ee338"]},"value":1,"unit":""}},{"id":"a-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-cover","selectorGuids":["734716ff-7468-9c60-ed75-ab39ff4ee338"]},"value":"block"}},{"id":"a-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":350,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-popup","selectorGuids":["d0c88fc1-14b2-7854-2e55-6d1fa65870b3"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-popup","selectorGuids":["d0c88fc1-14b2-7854-2e55-6d1fa65870b3"]},"value":"flex"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":100,"easing":"easeOut","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".menu-back","selectorGuids":["0de8a160-8c83-a4f5-ae30-62d74aa431ea"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":100,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-front","selectorGuids":["c6a8d08f-a725-bc0e-d0eb-19646b48cd9b"]},"value":"none"}},{"id":"a-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":100,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-back","selectorGuids":["0de8a160-8c83-a4f5-ae30-62d74aa431ea"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1716352314067},"a-2":{"id":"a-2","title":"Dropdown Menu Close","actionItemGroups":[{"actionItems":[{"id":"a-2-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":350,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-popup","selectorGuids":["d0c88fc1-14b2-7854-2e55-6d1fa65870b3"]},"xValue":400,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-2-n-14","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeOut","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".menu-back","selectorGuids":["0de8a160-8c83-a4f5-ae30-62d74aa431ea"]},"yValue":90,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-2-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":350,"target":{"selector":".nav-cover","selectorGuids":["734716ff-7468-9c60-ed75-ab39ff4ee338"]},"value":0,"unit":""}},{"id":"a-2-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":100,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-back","selectorGuids":["0de8a160-8c83-a4f5-ae30-62d74aa431ea"]},"value":"none"}},{"id":"a-2-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":100,"easing":"easeIn","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".menu-front","selectorGuids":["c6a8d08f-a725-bc0e-d0eb-19646b48cd9b"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-2-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":100,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-front","selectorGuids":["c6a8d08f-a725-bc0e-d0eb-19646b48cd9b"]},"value":"block"}},{"id":"a-2-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":350,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-popup","selectorGuids":["d0c88fc1-14b2-7854-2e55-6d1fa65870b3"]},"value":"none"}},{"id":"a-2-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":350,"easing":"","duration":0,"target":{"selector":".nav-cover","selectorGuids":["734716ff-7468-9c60-ed75-ab39ff4ee338"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716352314067},"a-3":{"id":"a-3","title":"Dropdown Menu Dashboard","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-back","selectorGuids":["0de8a160-8c83-a4f5-ae30-62d74aa431ea"]},"value":"none"}},{"id":"a-3-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-cover","selectorGuids":["734716ff-7468-9c60-ed75-ab39ff4ee338"]},"value":"none"}},{"id":"a-3-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-popup-dashboard","selectorGuids":["7016d69e-139a-7603-86a0-ab0adbbf65fa"]},"value":"none"}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-back","selectorGuids":["0de8a160-8c83-a4f5-ae30-62d74aa431ea"]},"yValue":90,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-3-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-popup-dashboard","selectorGuids":["7016d69e-139a-7603-86a0-ab0adbbf65fa"]},"xValue":400,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-3-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-cover","selectorGuids":["734716ff-7468-9c60-ed75-ab39ff4ee338"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-3-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeIn","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-front","selectorGuids":["c6a8d08f-a725-bc0e-d0eb-19646b48cd9b"]},"yValue":90,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-3-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":350,"target":{"selector":".nav-cover","selectorGuids":["734716ff-7468-9c60-ed75-ab39ff4ee338"]},"value":1,"unit":""}},{"id":"a-3-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-cover","selectorGuids":["734716ff-7468-9c60-ed75-ab39ff4ee338"]},"value":"block"}},{"id":"a-3-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":350,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-popup-dashboard","selectorGuids":["7016d69e-139a-7603-86a0-ab0adbbf65fa"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-3-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-popup-dashboard","selectorGuids":["7016d69e-139a-7603-86a0-ab0adbbf65fa"]},"value":"flex"}},{"id":"a-3-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-front","selectorGuids":["c6a8d08f-a725-bc0e-d0eb-19646b48cd9b"]},"value":"none"}},{"id":"a-3-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-back","selectorGuids":["0de8a160-8c83-a4f5-ae30-62d74aa431ea"]},"value":"block"}},{"id":"a-3-n-14","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":200,"easing":"easeOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-back","selectorGuids":["0de8a160-8c83-a4f5-ae30-62d74aa431ea"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1716352314067},"a-4":{"id":"a-4","title":"Dropdown Menu Close Dashboard","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":350,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-popup-dashboard","selectorGuids":["7016d69e-139a-7603-86a0-ab0adbbf65fa"]},"xValue":400,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-back","selectorGuids":["0de8a160-8c83-a4f5-ae30-62d74aa431ea"]},"yValue":90,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-4-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":350,"target":{"selector":".nav-cover","selectorGuids":["734716ff-7468-9c60-ed75-ab39ff4ee338"]},"value":0,"unit":""}},{"id":"a-4-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-back","selectorGuids":["0de8a160-8c83-a4f5-ae30-62d74aa431ea"]},"value":"none"}},{"id":"a-4-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":200,"easing":"easeIn","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-front","selectorGuids":["c6a8d08f-a725-bc0e-d0eb-19646b48cd9b"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-4-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-front","selectorGuids":["c6a8d08f-a725-bc0e-d0eb-19646b48cd9b"]},"value":"block"}},{"id":"a-4-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":350,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-popup-dashboard","selectorGuids":["7016d69e-139a-7603-86a0-ab0adbbf65fa"]},"value":"none"}},{"id":"a-4-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":350,"easing":"","duration":0,"target":{"selector":".nav-cover","selectorGuids":["734716ff-7468-9c60-ed75-ab39ff4ee338"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716352314067}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Header({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "header")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navigation", "main")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "nav-logo")} tag="div">
          <_Builtin.Image
            className={_utils.cx(_styles, "logo")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/65cac4ef1e320edf23a0f5af_logo.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-block")}
            tag="div"
          >
            {"Laced.bio"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "dropdown")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "dropdown-menu")}
            data-w-id="349784da-0ecc-6eb2-48f5-27df6fc35179"
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "menu-front")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/664d7983dd3fa2a634fc4c9c_Open.svg"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "menu-back")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/664d79dfb263bf87c3a3221b_Close.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "dropdown-popup")}
            tag="div"
            id="dropdownPopup"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "mobile-nav-links")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Home"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Premium"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Sign In"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Sign Up"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "nav-links")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link")}
            button={false}
            block=""
            options={{
              href: "/",
            }}
          >
            {"Home"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link")}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Premium"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link")}
            button={false}
            block=""
            options={{
              href: "/sign-in",
            }}
          >
            {"Sign In"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link")}
            button={false}
            block=""
            options={{
              href: "/sign-up",
            }}
          >
            {"Sign Up"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "home-top")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "heading")} tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "page-header", "gradient", "bracket")}
            tag="h1"
          >
            {"{"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "page-header")}
            tag="h1"
          >
            {"Share "}
            <_Builtin.Span className={_utils.cx(_styles, "stroke")}>
              {"Your"}
            </_Builtin.Span>
            {" World With One "}
            <_Builtin.Span className={_utils.cx(_styles, "stroke")}>
              {"Link."}
            </_Builtin.Span>
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "page-header", "gradient", "bracket")}
            tag="h1"
          >
            {"}"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph", "center")}
        >
          {
            "Display your social media accounts, discord, music, and much more. "
          }
          <br />
          {"Create your bio link now for free!"}
        </_Builtin.Paragraph>
        <_Builtin.FormWrapper className={_utils.cx(_styles, "claim-link")}>
          <_Builtin.FormForm
            className={_utils.cx(_styles, "claim-form")}
            name="email-form"
            data-name="Email Form"
            method="get"
            id="email-form"
          >
            <_Builtin.FormBlockLabel className={_utils.cx(_styles, "label")}>
              {"Claim Your Link"}
            </_Builtin.FormBlockLabel>
            <_Builtin.Block
              className={_utils.cx(_styles, "link-input-container")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "claim-input")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "link-input-side")}
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className={_utils.cx(_styles, "label", "gradient")}
                  >
                    {"Laced.bio/"}
                  </_Builtin.FormBlockLabel>
                </_Builtin.Block>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "link-input")}
                  autoFocus={false}
                  maxLength={256}
                  name="link-name-2"
                  data-name="Link Name 2"
                  placeholder="name"
                  type="text"
                  disabled={false}
                  required={true}
                  id="link-name-2"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "claim-submit")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/65caf2be50d323fd549b82e3_checkmark.svg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage>
            <_Builtin.Block tag="div">
              {"Thank you! Your submission has been received!"}
            </_Builtin.Block>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage>
            <_Builtin.Block tag="div">
              {"Oops! Something went wrong while submitting the form."}
            </_Builtin.Block>
          </_Builtin.FormErrorMessage>
        </_Builtin.FormWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
