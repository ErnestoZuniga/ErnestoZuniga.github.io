import { configureStore } from '@reduxjs/toolkit';

import languages from '../slices/languages';
import loading from '../slices/loading';

export default configureStore({
  reducer: {
    languages,
    loading,
  }
});