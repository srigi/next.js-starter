import { atom } from 'jotai';

interface GlobalUiAtom {
  errorToast: string | null;
}

export default atom<GlobalUiAtom>({
  errorToast: null,
});
