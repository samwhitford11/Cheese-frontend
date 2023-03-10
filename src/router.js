import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import { createAction, updateAction, deleteAction } from './actions';
import App from './App';
import { cheeseLoader, cheesesLoader } from './loaders';
import Index from './pages/Index';
import Show from './pages/Show';

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={cheeseLoader}/>
            <Route path=":id" element={<Show/>} loader={cheesesLoader}/>

            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>

    )

);

export default router;