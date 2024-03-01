import { Createslice } from "@reduxjs/toolkit";

const appSlice = Createslice({

    name:"app",
    initialState:{
        open :true,
    },
    reducers:{
        toggleSidebar:(state)=>
        {
            state.open = !state.open
        }
    }

});

export default appSlice.reducers;
export const {toggleSidebar} = appSlice.actions;