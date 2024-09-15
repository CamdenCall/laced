"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DashboardTab.module.css";
import Chart from "../components/graph"


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function DashboardTab({ as: _Component = _Builtin.Section, user}) {
  console.log(user)
  const linkData = JSON.parse(user.biolink)
  return (
    <_Component
      className={_utils.cx(_styles, "dashboardtab")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "tab-top")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "tab-info")} tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "tab-heading")}
            tag="h1"
            id="user"
          >
            {`${capitalizeFirstLetter(user.link)}'s Dashboard`}
          </_Builtin.Heading>
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          { linkData.premium ?
          <_Builtin.Block className={_utils.cx(_styles, "_16-reg")} tag="div"id="userPlan">
            {"Premium"}
          </_Builtin.Block> :
          <_Builtin.Block className={_utils.cx(_styles, "_16-reg")} tag="div"id="userPlan">
            {"Starter"}
          </_Builtin.Block>
          }
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "open-link")}
          button={false}
          id="openLink"
          block="inline"
          options={{
            href: user.link,
          }}
        >
          <_Builtin.Block className={_utils.cx(_styles, "_16-reg")} tag="div">
            {"Open Link"}
          </_Builtin.Block>
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/6650d8d7d89a1114e17d33d7_open-link.svg"
          />
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "dashboard-main")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "link-views")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "view-header")}
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "_16-reg")} tag="div">
              {"Link Views"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "view-count")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/6652d38a077542f98c3fc3dd_views-icon.svg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "_16-reg")}
                tag="div"
                id="views"
              >
                {linkData.views}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <Chart></Chart>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "dashboard-main-right")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "info-card")} tag="div">
            <_Builtin.Block className={_utils.cx(_styles, "_16-reg")} tag="div">
              {"Latest Updates"}
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "_16-reg")} tag="div">
              <_Builtin.Span className={_utils.cx(_styles, "dark")}>
                {"--"}
              </_Builtin.Span>
              {" New Badges For Discord Status"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "info-card")} tag="div">
            <_Builtin.Block className={_utils.cx(_styles, "_16-reg")} tag="div">
              {"Future Features"}
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "_16-reg")} tag="div">
              <_Builtin.Span className={_utils.cx(_styles, "dark")}>
                {"--"}
              </_Builtin.Span>
              {" Background Effects"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "info-card")} tag="div">
            <_Builtin.Block className={_utils.cx(_styles, "_16-reg")} tag="div">
              {"Quick Links"}
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "_16-reg")} tag="div">
              <_Builtin.Span className={_utils.cx(_styles, "dark")}>
                {"--"}
              </_Builtin.Span>
              {" New Badges For Discord Status"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
