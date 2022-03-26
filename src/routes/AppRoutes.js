import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Team from '../pages/Team'

import AppLayout from "../layout/AppLayout";
import AgentInbox from "../pages/AgentInbox";
import OtherPage from "../components/OtherPage";

const AppRoutes = (props) => {
  return (
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={
                <AppLayout >
                  <Team />
                </AppLayout>
            }/> 
            <Route path="/agent-inbox" element={
                <AppLayout >
                  <OtherPage title="Agent Inbox"/>
                </AppLayout>
            }/> 
            <Route path="/help-center" element={
                <AppLayout >
                  <OtherPage title="Help Center"/>
                </AppLayout>
            }/>

            <Route path="/training-sam" element={
                <AppLayout >
                  <OtherPage title="Training Sam"/>
                </AppLayout>
            }/> 
            <Route path="/knowledge-base" element={
                <AppLayout >
                  <OtherPage title="Knowledge Base"/>
                </AppLayout>
            }/> 

            <Route path="/train-sam" element={
                <AppLayout >
                  <OtherPage title="Train Sam"/>
                </AppLayout>
            }/> 
            <Route path="/admin" element={
                <AppLayout >
                  <OtherPage title="Admin"/>
                </AppLayout>
            }/> 
            
    
        </Routes> 
    </BrowserRouter>
  );
}

export default AppRoutes;
