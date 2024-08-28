"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Discord.module.css";

export function Discord({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "discord")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "discord-left")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "discord-left-top")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "secret-text")}
            tag="div"
          >
            {".- . ... - .... . - .. -.-."}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "discord-header")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/65d62766210ecc730a9458b0_discord-logo.svg"
            />
            <_Builtin.Heading
              className={_utils.cx(_styles, "section-header")}
              tag="h2"
            >
              {"Offical Discord"}
              <br />
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Heading className={_utils.cx(_styles, "sub-header")} tag="h3">
          {"**"}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "discord-right")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "server-desc")} tag="div">
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "paragraph", "white")}
          >
            {"Laced.Bio"}
          </_Builtin.Paragraph>
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
            {
              "Join our discord server for support, announcements, to interact with other server members and much more!"
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "discord-button")}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "button-text")}
            tag="div"
          >
            <_Builtin.Paragraph className={_utils.cx(_styles, "_16-reg")}>
              {"Join Our Discord"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
