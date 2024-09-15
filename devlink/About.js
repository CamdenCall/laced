"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./About.module.css";

export function About({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "about")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "about-top")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "about-heading")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "secret-text")}
            tag="div"
          >
            {".-.-.-"}
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "section-header")}
            tag="h2"
          >
            {"Create."}
            <br />
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "section-header")}
            tag="h2"
          >
            {"Customize."}
            <br />
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "section-header")}
            tag="h2"
          >
            {"Convey"}
            <br />
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "image")}
          loading="lazy"
          width="Auto"
          height="Auto"
          alt=""
          src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/65cafb8e19c3e5172bedd161_social-preview.png"
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "about-bottom")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "about-bar")} tag="div" />
        <_Builtin.Block
          className={_utils.cx(_styles, "about-option")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "option-name")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/65d283b406779376ff197546_link-tag.svg"
            />
            <_Builtin.Heading
              className={_utils.cx(_styles, "sub-header")}
              tag="h3"
            >
              {"Link Tag"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
            {"Create your own URL tag that directs people to your profile."}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "about-option")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "option-name")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/65d283b417205756789ec1f7_profile.svg"
            />
            <_Builtin.Heading
              className={_utils.cx(_styles, "sub-header")}
              tag="h3"
            >
              {"Profile"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
            {
              "Create and customize your profile with a profile picture, bio and username."
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "about-option")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "option-name")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/65d283b43468e1a2dfd19ce8_socials.svg"
            />
            <_Builtin.Heading
              className={_utils.cx(_styles, "sub-header")}
              tag="h3"
            >
              {"Socials"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
            {"Link to all your favorite social medias."}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "about-option")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "option-name")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/65d283b4f3c28f44ab1843b8_widgets.svg"
            />
            <_Builtin.Heading
              className={_utils.cx(_styles, "sub-header")}
              tag="h3"
            >
              {"Widgets"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "paragraph", "tall")}
          >
            {"Add more utility to your biolink with our widgets."}
            <br />
            {"- Live Discord Profile"}
            <br />
            {"-Spotify Song Embed"}
            <br />
            {"-Current Local Time"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
