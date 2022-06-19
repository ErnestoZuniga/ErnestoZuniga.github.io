import { configureStore } from '@reduxjs/toolkit';

import languages from '../slices/languages';

export default configureStore({
  reducer: {
    languages
  }
});