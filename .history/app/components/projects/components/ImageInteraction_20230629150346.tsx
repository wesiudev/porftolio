"use client";
import React from "react";
import {
  setCurrentImages,
  setCurrentImageID,
} from "../../../../redux/stateSlice";
import { store } from "../../../../redux/store";

export const ImageInteraction = ({
  children,
  images,
  imageId,
}: {
  children: React.ReactNode;
  images: any[];
  imageId: number;
}) => {
  return (
    <button
      onClick={() => {
        store.dispatch(setCurrentImageID(imageId)),
          store.dispatch(setCurrentImages(images));
      }}
    >
      {children}
    </button>
  );
};
