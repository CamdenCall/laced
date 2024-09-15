"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./WidgetsTab.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2ade6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2ade6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718243510494},"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2ade8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2ade8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718243560531},"e-11":{"id":"e-11","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2ae35","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2ae35","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718601789064},"e-13":{"id":"e-13","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-14"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2ae37","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2ae37","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718601789064},"e-15":{"id":"e-15","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2ae53","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2ae53","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718601861379},"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2ae55","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2ae55","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718601861379},"e-19":{"id":"e-19","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2adef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2adef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718602536891},"e-20":{"id":"e-20","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2adef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2adef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718602536891},"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2ae5c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2ae5c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718610620609},"e-22":{"id":"e-22","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2ae5c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2ae5c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718610620609},"e-23":{"id":"e-23","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2adea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2adea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718656401680},"e-24":{"id":"e-24","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4122e16a-7c24-ef73-a919-91819ff2adea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4122e16a-7c24-ef73-a919-91819ff2adea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718656401680},"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"58cf9c30-00ea-0f03-4465-c5c3985737e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"58cf9c30-00ea-0f03-4465-c5c3985737e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718672715448},"e-26":{"id":"e-26","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"58cf9c30-00ea-0f03-4465-c5c3985737e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"58cf9c30-00ea-0f03-4465-c5c3985737e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718672715449},"e-27":{"id":"e-27","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ad325da9-4396-afde-a95d-1851de683331","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ad325da9-4396-afde-a95d-1851de683331","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718673873580},"e-28":{"id":"e-28","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ad325da9-4396-afde-a95d-1851de683331","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ad325da9-4396-afde-a95d-1851de683331","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718673873580},"e-31":{"id":"e-31","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"4122e16a-7c24-ef73-a919-91819ff2ae39"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1719377768786},"e-32":{"id":"e-32","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"4122e16a-7c24-ef73-a919-91819ff2ae39"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1719377768787},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"4122e16a-7c24-ef73-a919-91819ff2ae57"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1719378129535},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"4122e16a-7c24-ef73-a919-91819ff2ae57"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1719378129576},"e-35":{"id":"e-35","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"664fb44b512feba2a6822f14|a19622c2-015e-588f-b37c-0dd3f67ef350","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1719418591041},"e-36":{"id":"e-36","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"664fb44b512feba2a6822f14|a19622c2-015e-588f-b37c-0dd3f67ef350","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1719418591041}},"actionLists":{"a-5":{"id":"a-5","title":"Enable","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".checkbox-checked","selectorGuids":["190a0d87-f7cd-9637-60a5-144b81fe8c2d"]},"value":"flex"}},{"id":"a-5-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2ade6"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718243513232},"a-6":{"id":"a-6","title":"Disable","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2ade8"},"value":"none"}},{"id":"a-6-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".checkbox","selectorGuids":["85c84814-32f5-91cd-b5cf-fdb3cd547ddc"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718243513232},"a-8":{"id":"a-8","title":"Input Dropdown","actionItemGroups":[{"actionItems":[{"id":"a-8-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-social","selectorGuids":["895cad7c-7890-df1f-3063-6a35e9b25258"]},"value":"none"}},{"id":"a-8-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-social","selectorGuids":["895cad7c-7890-df1f-3063-6a35e9b25258"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-8-n","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":0,"unit":"px"},"target":{"objectId":"--border","useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adef"}}},{"id":"a-8-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["c92038bc-ea64-627d-b688-c40178ffde7d"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-social","selectorGuids":["895cad7c-7890-df1f-3063-6a35e9b25258"]},"widthValue":100,"heightValue":169,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-8-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-social","selectorGuids":["895cad7c-7890-df1f-3063-6a35e9b25258"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1718602539747},"a-9":{"id":"a-9","title":"Input Dropdown Close","actionItemGroups":[{"actionItems":[{"id":"a-9-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["c92038bc-ea64-627d-b688-c40178ffde7d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-9-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-social","selectorGuids":["895cad7c-7890-df1f-3063-6a35e9b25258"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-9-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-social","selectorGuids":["895cad7c-7890-df1f-3063-6a35e9b25258"]},"value":"none"}},{"id":"a-9-n-8","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"target":{"objectId":"--updateurl\\\\<deleted\\\\|variable-d2b50aba-497b-794b-1bca-c27d612ddb72\\\\>","useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adef"},"value":{"size":7.5,"unit":"px"}}},{"id":"a-9-n-3","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":7.5,"unit":"px"},"target":{"objectId":"--border","useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adef"}}},{"id":"a-9-n-5","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":1,"unit":"px"},"target":{"objectId":"--bordersize","useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adef"}}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718602539747},"a-10":{"id":"a-10","title":"Dropdown Time","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-time","selectorGuids":["93bd9e18-8f6c-75f2-367f-844ade0807f1"]},"value":"none"}},{"id":"a-10-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-time","selectorGuids":["93bd9e18-8f6c-75f2-367f-844ade0807f1"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-10-n-3","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":0,"unit":"px"},"target":{"objectId":"--timeborder","selector":".timezone-dropdown","selectorGuids":["0a3b0101-4f2f-5fee-db23-f1a870fe15af"]}}},{"id":"a-10-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["c92038bc-ea64-627d-b688-c40178ffde7d"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-10-n-5","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":0,"unit":"px"},"target":{"objectId":"--timesize","selector":".timezone-dropdown","selectorGuids":["0a3b0101-4f2f-5fee-db23-f1a870fe15af"]}}},{"id":"a-10-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-time","selectorGuids":["93bd9e18-8f6c-75f2-367f-844ade0807f1"]},"widthValue":100,"heightValue":167,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-10-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-time","selectorGuids":["93bd9e18-8f6c-75f2-367f-844ade0807f1"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1718602539747},"a-11":{"id":"a-11","title":"Dropdown Close Time","actionItemGroups":[{"actionItems":[{"id":"a-11-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["c92038bc-ea64-627d-b688-c40178ffde7d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-11-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-time","selectorGuids":["93bd9e18-8f6c-75f2-367f-844ade0807f1"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-11-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-time","selectorGuids":["93bd9e18-8f6c-75f2-367f-844ade0807f1"]},"value":"none"}},{"id":"a-11-n-4","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":7.5,"unit":"px"},"target":{"objectId":"--timeborder","useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adef"}}},{"id":"a-11-n-5","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":0,"value":{"size":1,"unit":"px"},"target":{"objectId":"--timesize","useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adef"}}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718602539747},"a-14":{"id":"a-14","title":"Widget Dropdown","actionItemGroups":[{"actionItems":[{"id":"a-14-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"useEventTarget":"SIBLINGS","selector":".widget-bottom","selectorGuids":["15cb4bf5-b21a-1140-3676-adbeaa4ed2ee"]}}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adea"},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-14-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"flex","target":{"useEventTarget":"SIBLINGS","selector":".widget-bottom","selectorGuids":["15cb4bf5-b21a-1140-3676-adbeaa4ed2ee"]}}}]}],"createdOn":1719377335529,"useFirstGroupAsInitialState":true},"a-15":{"id":"a-15","title":"Widget Dropdown Close","actionItemGroups":[{"actionItems":[{"id":"a-15-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"4122e16a-7c24-ef73-a919-91819ff2adea"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-15-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"useEventTarget":"SIBLINGS","selector":".widget-bottom","selectorGuids":["15cb4bf5-b21a-1140-3676-adbeaa4ed2ee"]}}}]}],"createdOn":1719377335529,"useFirstGroupAsInitialState":false},"a-12":{"id":"a-12","title":"Nav Dropdown","actionItemGroups":[{"actionItems":[{"id":"a-12-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-bottom","selectorGuids":["3942e4da-9d8f-298a-24f3-9becc0e53f43"]},"value":"none"}},{"id":"a-12-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-bottom","selectorGuids":["3942e4da-9d8f-298a-24f3-9becc0e53f43"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-12-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-bottom","selectorGuids":["3942e4da-9d8f-298a-24f3-9becc0e53f43"]},"value":"flex"}},{"id":"a-12-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeIn","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["c92038bc-ea64-627d-b688-c40178ffde7d"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-12-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-bottom","selectorGuids":["3942e4da-9d8f-298a-24f3-9becc0e53f43"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1718672718320},"a-13":{"id":"a-13","title":"Nav Dropdown Close","actionItemGroups":[{"actionItems":[{"id":"a-13-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-bottom","selectorGuids":["3942e4da-9d8f-298a-24f3-9becc0e53f43"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-13-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["c92038bc-ea64-627d-b688-c40178ffde7d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-13-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dropdown-bottom","selectorGuids":["3942e4da-9d8f-298a-24f3-9becc0e53f43"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718672718320}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function WidgetsTab({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "widgetstab")}
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
          >
            {"Widgets"}
          </_Builtin.Heading>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "widgets-main")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "widget")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "widget-container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "widget-top")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "widget-top-left")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "widget-name")}
                  tag="div"
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666de3b53eeb9ea1ad060922_socials.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "_18-reg", "no-wrap")}
                    tag="div"
                  >
                    {"Socials Widget"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "widget-enable")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "_16-reg")}
                    tag="div"
                  >
                    {"Enable"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "checkbox")}
                    data-w-id="4122e16a-7c24-ef73-a919-91819ff2ade6"
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "dark-check")}
                      loading="lazy"
                      width="Auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666a4f9035c1672d30330d45_checkmark.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "checkbox-checked")}
                    data-w-id="4122e16a-7c24-ef73-a919-91819ff2ade8"
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "black-check")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666a505df9f1762bb13fe0a2_checkmark-black.svg"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "widget-dropdown")}
                id={_utils.cx(
                  _styles,
                  "w-node-_4122e16a-7c24-ef73-a919-91819ff2adea-9ff2add5"
                )}
                data-w-id="4122e16a-7c24-ef73-a919-91819ff2adea"
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666de4bf55737009c422a8d8_dropdown-white.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "widget-bottom")}
                id={_utils.cx(
                  _styles,
                  "w-node-_4122e16a-7c24-ef73-a919-91819ff2adec-9ff2add5"
                )}
                tag="div"
              >
                <_Builtin.FormWrapper
                  className={_utils.cx(_styles, "form-block")}
                >
                  <_Builtin.FormForm
                    className={_utils.cx(_styles, "social-form")}
                    name="wf-form-socials"
                    data-name="socials"
                    method="get"
                    id="wf-form-socials"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "social-dropdown")}
                      data-w-id="4122e16a-7c24-ef73-a919-91819ff2adef"
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dropdown-social")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666e8cd351ada6549e2f408a_instagram.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Instagram"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666e8cd351ada6549e2f408a_instagram.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Instagram"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666e8cd351ada6549e2f408a_instagram.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Instagram"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666e8cd351ada6549e2f408a_instagram.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Instagram"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666e8cd351ada6549e2f408a_instagram.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Instagram"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "social-name")}
                        tag="div"
                      >
                        <_Builtin.Image
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666e8cd351ada6549e2f408a_instagram.svg"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "_16-reg")}
                          tag="div"
                        >
                          {"Instagram"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Image
                        className={_utils.cx(_styles, "dropdown-arrow")}
                        width="15"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/665429542603030ef3ee3668_dropdown.svg"
                      />
                    </_Builtin.Block>
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "widget-field")}
                      autoFocus={false}
                      maxLength={256}
                      name="url"
                      data-name="url"
                      placeholder="URL"
                      type="text"
                      disabled={false}
                      required={true}
                      id="url-3"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "widget-button")}
                      tag="div"
                    >
                      <_Builtin.Image
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666fb3297e95efb563497670_plus.svg"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "_16-reg")}
                        tag="div"
                      >
                        {"Add Social"}
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
                <_Builtin.FormWrapper
                  className={_utils.cx(_styles, "form-block")}
                >
                  <_Builtin.FormForm
                    className={_utils.cx(_styles, "social-form")}
                    name="wf-form-updateSocials"
                    data-name="updateSocials"
                    method="get"
                    id="wf-form-updateSocials"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "social-dropdown")}
                      data-w-id="a19622c2-015e-588f-b37c-0dd3f67ef350"
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dropdown-social")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666e8cd351ada6549e2f408a_instagram.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Instagram"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666e8cd351ada6549e2f408a_instagram.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Instagram"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666e8cd351ada6549e2f408a_instagram.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Instagram"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "social-name")}
                        tag="div"
                      >
                        <_Builtin.Image
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666e8cd351ada6549e2f408a_instagram.svg"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "_16-reg")}
                          tag="div"
                        >
                          {"Instagram"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Image
                        className={_utils.cx(_styles, "dropdown-arrow")}
                        width="15"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/665429542603030ef3ee3668_dropdown.svg"
                      />
                    </_Builtin.Block>
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "widget-field")}
                      name="updateUrl"
                      maxLength={256}
                      data-name="updateUrl"
                      placeholder="URL"
                      disabled={false}
                      type="text"
                      required={true}
                      autoFocus={false}
                      id="updateUrl-3"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "widget-button")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "_16-reg")}
                        tag="div"
                      >
                        {"Save Changes"}
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
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "widget")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "widget-container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "widget-top")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "widget-top-left")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "widget-name")}
                  tag="div"
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666fca640a6b172e1bdbc92a_discord.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "_18-reg", "no-wrap")}
                    tag="div"
                  >
                    {"Discord Widget"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "widget-enable")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "_16-reg")}
                    tag="div"
                  >
                    {"Enable"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "checkbox")}
                    data-w-id="4122e16a-7c24-ef73-a919-91819ff2ae35"
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "dark-check")}
                      loading="lazy"
                      width="Auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666a4f9035c1672d30330d45_checkmark.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "checkbox-checked")}
                    data-w-id="4122e16a-7c24-ef73-a919-91819ff2ae37"
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "black-check")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666a505df9f1762bb13fe0a2_checkmark-black.svg"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "widget-dropdown")}
                id={_utils.cx(
                  _styles,
                  "w-node-_4122e16a-7c24-ef73-a919-91819ff2ae39-9ff2add5"
                )}
                data-w-id="4122e16a-7c24-ef73-a919-91819ff2ae39"
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666de4bf55737009c422a8d8_dropdown-white.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "widget-bottom")}
                id={_utils.cx(
                  _styles,
                  "w-node-_4122e16a-7c24-ef73-a919-91819ff2ae3b-9ff2add5"
                )}
                tag="div"
              >
                <_Builtin.FormWrapper
                  className={_utils.cx(_styles, "form-block")}
                >
                  <_Builtin.FormForm
                    className={_utils.cx(_styles, "social-form")}
                    name="wf-form-socials"
                    data-name="socials"
                    method="get"
                    id="wf-form-socials"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "widget-field")}
                      autoFocus={false}
                      maxLength={256}
                      name="discordID"
                      data-name="discordID"
                      placeholder="Discord ID"
                      type="text"
                      disabled={false}
                      required={true}
                      id="discordID-3"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "widget-button")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "_16-reg")}
                        tag="div"
                      >
                        {"Save Changes"}
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
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "widget")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "widget-container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "widget-top")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "widget-top-left")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "widget-name")}
                  tag="div"
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666fc8c992d5645c0eae6ccf_time.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "_18-reg", "no-wrap")}
                    tag="div"
                  >
                    {"Time Widget"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "widget-enable")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "_16-reg")}
                    tag="div"
                  >
                    {"Enable"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "checkbox")}
                    data-w-id="4122e16a-7c24-ef73-a919-91819ff2ae53"
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "dark-check")}
                      loading="lazy"
                      width="Auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666a4f9035c1672d30330d45_checkmark.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "checkbox-checked")}
                    data-w-id="4122e16a-7c24-ef73-a919-91819ff2ae55"
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "black-check")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666a505df9f1762bb13fe0a2_checkmark-black.svg"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "widget-dropdown")}
                id={_utils.cx(
                  _styles,
                  "w-node-_4122e16a-7c24-ef73-a919-91819ff2ae57-9ff2add5"
                )}
                data-w-id="4122e16a-7c24-ef73-a919-91819ff2ae57"
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/666de4bf55737009c422a8d8_dropdown-white.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "widget-bottom")}
                id={_utils.cx(
                  _styles,
                  "w-node-_4122e16a-7c24-ef73-a919-91819ff2ae59-9ff2add5"
                )}
                tag="div"
              >
                <_Builtin.FormWrapper
                  className={_utils.cx(_styles, "form-block")}
                >
                  <_Builtin.FormForm
                    className={_utils.cx(_styles, "social-form")}
                    name="wf-form-socials"
                    data-name="socials"
                    method="get"
                    id="wf-form-socials"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "timezone-dropdown")}
                      data-w-id="4122e16a-7c24-ef73-a919-91819ff2ae5c"
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "social-name")}
                        tag="div"
                        id="timezone"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "_16-reg")}
                          tag="div"
                        >
                          {"Mountain Time"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Image
                        className={_utils.cx(_styles, "dropdown-arrow")}
                        width="15"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/65cac36d42b7fd39d61e0220/665429542603030ef3ee3668_dropdown.svg"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dropdown-time")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Central Time"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Central Time"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Central Time"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Central Time"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "social-name",
                            "dropdown-selector"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "_16-reg")}
                            tag="div"
                          >
                            {"Central Time"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "widget-button")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "_16-reg")}
                        tag="div"
                      >
                        {"Save Changes"}
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
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
