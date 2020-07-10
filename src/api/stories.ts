/*
--------------------------------------------------------------------------
 Stories
--------------------------------------------------------------------------
*/

import API from "./config";

export function getStories(type: string = "top") {
  return API({
    method: "get",
    url: `/${type}stories.json`,
    params: {
      print: "pretty",
    },
  });
}

export function getStoryById(storyId: string) {
  return API({
    method: "get",
    url: `/item/${storyId}.json`,
    params: {
      print: "pretty",
    },
  });
}

export function getCommentById(commentId: number) {
  return API({
    method: "get",
    url: `/item/${commentId}.json`,
    params: {
      print: "pretty",
    },
  });
}
