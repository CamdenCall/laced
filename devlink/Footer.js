"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "footer")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "footer-container")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "nav-left")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "nav-logo")} tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "logo")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/65cac4ef1e320edf23a0f5af_logo.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-block")}
              tag="div"
            >
              {"Laced.bio"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "aesthetic")} tag="div">
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/664ad805b087f68a22720dec_bullet.svg"
            />
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph", "white")}
            >
              {"The Most Aesthetic Bio Link."}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "nav-right")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-nav-links")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-link-contain")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-bar")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link", "footer-link")}
                data-w-id="71376af2-0246-0e10-2c0c-0e4e42977e60"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Home"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-link-contain")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-bar")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link", "footer-link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Premium"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-link-contain")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-bar")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link", "footer-link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Sign In"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-link-contain")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-bar")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link", "footer-link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Sign Up"}
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-bar")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
