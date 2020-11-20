export interface NuVidioWidgetOptions {
  fabButton?: boolean;
  fabButtonContent?: string;
  errorMessage?: string;
  open: boolean;
  clientData?: {
    name?: string;
    email?: string;
    pushToQueue?: boolean;
  }
}