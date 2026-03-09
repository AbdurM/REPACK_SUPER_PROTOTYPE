// generated from template

interface ContentLoaderViewModelProps {}

interface ContentLoaderViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContentLoaderViewProps {
  readonly children: any;
  readonly loadingContainerWidth: number;
  readonly loadingContainerHeight: number;
  readonly outerLineComponent?: any;
  readonly loadingBackgroundColor: string;
  readonly loadingForegroundColor:string;
}

export type { ContentLoaderViewModelProps,ContentLoaderViewProps,ContentLoaderViewModel };