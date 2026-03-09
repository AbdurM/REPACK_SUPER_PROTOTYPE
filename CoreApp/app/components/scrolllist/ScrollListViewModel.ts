// generated from template

import React from "react";
import { useState } from "react";
import {
  ScrollListViewModel,
  ScrollListViewModelProps,
} from "./ScrollListModel";


export default function useScrollListViewModel({}: ScrollListViewModelProps): ScrollListViewModel {
  const [loading, setLoading] = useState<boolean>(true);

  
  return { loading, setLoading };
}
