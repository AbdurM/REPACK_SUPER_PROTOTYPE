// generated from template

import { useState, useEffect } from 'react';
import { FlashListViewModel,FlashListViewModelProps,userModel } from './FlashListModel';

export default function useFlashListViewModel(): FlashListViewModel {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<userModel>({
    arrayData: [],
    objectData: {},
    stringData: '',
    booleanData: false
  });

  useEffect(() => {
    // component Initialization 
  }, []);


  return { loading, setLoading, userData, setUserData };
}
