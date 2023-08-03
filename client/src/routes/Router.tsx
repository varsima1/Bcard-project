import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES, { SANDBOX_ROUTES } from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SignupPage from "../users/pages/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SandboxMenu from "../sandbox/SandboxMenu";
import Template from "../sandbox/components/Template";
import ComponentMenu from "../sandbox/components/ComponentMenu";
import Logic from "../sandbox/components/Logic";
import Styles from "../sandbox/components/styles/Styles";
import LoginPage from "../users/pages/LoginPage";
import StyleModule from "../sandbox/components/styles/StyleModule";
import SandboxComponents from "../sandbox/components/SandboxComponents";
import Babel from "../sandbox/introduction/Babel";
import StringInterpolation from "../sandbox/components/StringInterpolation";
import Loops from "../sandbox/iterations/Loops";
import ConditionalRendering from "../sandbox/conditional-rendering/ConditionalRendering";
import EventsMenu from "../sandbox/events/EventsMenu";
import OnClick from "../sandbox/events/OnClick";
import OnClickJs from "../sandbox/events/OnClickJs";
import RaisingEvents from "../sandbox/events/RaisingEvents";
import RaisingEventsJ from "../sandbox/events/RaisingEventsJs";
import MuiSandbox from "../sandbox/mui-sandbox/MuiSandbox";
import DataMenu from "../sandbox/mui-sandbox/data-display/DataMenu";
import LayoutMenu from "../sandbox/mui-sandbox/layout/LayoutMenu";
import NavigationMenu from "../sandbox/mui-sandbox/navigations/NavigationMenu";
import MuiButton from "../sandbox/mui-sandbox/data-display/MuiButton";
import MuiDivider from "../sandbox/mui-sandbox/data-display/MuiDivider";
import MuiTypography from "../sandbox/mui-sandbox/data-display/MuiTypography";
import MuiBox from "../sandbox/mui-sandbox/layout/MuiBox";
import MuiContainer from "../sandbox/mui-sandbox/layout/MuiContainer";
import MuiGrid from "../sandbox/mui-sandbox/layout/MuiGrid";
import MuiStack from "../sandbox/mui-sandbox/layout/MuiStack";
import MuiAppBar from "../sandbox/mui-sandbox/navigations/MuiAppBar";
import MuiBottomNavigation from "../sandbox/mui-sandbox/navigations/MuiBottomNavigation";
import PropsMenu from "../sandbox/props/PropsMenu";
import PropsTs from "../sandbox/props/props-ts/PropsTs";
import PropsObjectMenu from "../sandbox/props/props-object/PropsObjectMenu";
import PropsStringMenu from "../sandbox/props/props-string/PropsStringMenu";
import PropsTwokeysMenu from "../sandbox/props/props-two-keys/PropsTwokeysMenu";
import ChildPropsObject from "../sandbox/props/props-object/ChildPropsObject";
import FatherPropsObject from "../sandbox/props/props-object/FatherPropsObject";
import ChildPropsString from "../sandbox/props/props-string/ChildPropsString";
import FatherPropsString from "../sandbox/props/props-string/FatherPropsString";
import ChildPropsTwoKeys from "../sandbox/props/props-two-keys/ChildPropsTwoKeys";
import FatherPropsTwoKeys from "../sandbox/props/props-two-keys/FatherPropsTwoKeys";
import UseStateMenu from "../sandbox/use-state/UseStateMenu";
import SetPosts from "../sandbox/use-state/SetPosts";
import UseState from "../sandbox/use-state/UseState";
import UseStateWithArrayOfObjects from "../sandbox/use-state/UseStateWithArrayOfObjects";
import UseStateWithComplexObject from "../sandbox/use-state/UseStateWithComplexObject";
import UseStateWithFunction from "../sandbox/use-state/UseStateWithFunction";
import UseStateWithObject from "../sandbox/use-state/UseStateWithObject";
import CardEditPage from "../cards/pages/CardEditPage";
import LyfecyclehookEx from "../sandbox/events/LyfecyclehookEx";
import CustomName from "../sandbox/events/CustomName";
import LyfeCycleMenu from "../sandbox/lyfecycle/LyfeCycleMenu";
import ExLyfeCycle from "../sandbox/lyfecycle/ExLyfeCycle";
import CustomHookMenu from "../sandbox/customhooks/CustomHookMenu";
import CustomNameEx2 from "../sandbox/customhooks/CustomNameEx2";
import ContextMenu from "../sandbox/context/ContextMenu";
import SnackExample from "../sandbox/context/SnackExample";
import FormTest from "../sandbox/forms/FormTest";
import CreateCardPage from "../cards/pages/CreateCardPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import FavCardPage from "../cards/pages/FavCardPage";
import CRM from "../users/pages/Crm";
import EditUserPage from "../users/pages/EditUserPage";
import ProfilePage from "../users/pages/ProfilePage";
import ChangeBizNumberDialog from "../cards/pages/ChangeBizNumberPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route
        path={`${ROUTES.CARD_DETAILS}/:cardId`}
        element={<CardDetailsPage />}
      />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
      <Route path={`${ROUTES.CARD_EDIT}/:cardId`} element={<CardEditPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={`${ROUTES.FAV_CARDS}/:cardId`} element={<FavCardPage />} />
      <Route path={ROUTES.CRM} element={<CRM />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route
        path={`${ROUTES.EDIT_USER_PAGE}/:userId`}
        element={<EditUserPage />}
      />
      <Route
        path={`${ROUTES.PROFILE_USER_PAGE}/:userId`}
        element={<ProfilePage />}
      />
      <Route
        path={`${ROUTES.CHANGE_BIZ_NUMBER}/:cardId`}
        element={<ChangeBizNumberDialog />}
      />
      <Route path={ROUTES.SANDBOX} element={<SandboxMenu />}>
        <Route path={SANDBOX_ROUTES.COMPONENT} element={<ComponentMenu />}>
          <Route path={SANDBOX_ROUTES.TEMPLATE} element={<Template />} />
          <Route path={SANDBOX_ROUTES.LOGIC} element={<Logic />} />
          <Route path={SANDBOX_ROUTES.STYLES} element={<Styles />} />
          <Route path={SANDBOX_ROUTES.STYLE_MODULE} element={<StyleModule />} />
          <Route
            path={SANDBOX_ROUTES.SANDBOX_COMPONENTS}
            element={<SandboxComponents />}
          >
            <Route path={SANDBOX_ROUTES.BABEL} element={<Babel />} />
            <Route
              path={SANDBOX_ROUTES.STRING_INTERPOLATION}
              element={<StringInterpolation />}
            />
            <Route path={SANDBOX_ROUTES.LOOPS} element={<Loops />} />
            <Route
              path={SANDBOX_ROUTES.CONDITIONAL_RENDERING}
              element={<ConditionalRendering />}
            />
          </Route>
        </Route>
        <Route path={SANDBOX_ROUTES.EVENTS} element={<EventsMenu />}>
          <Route path={SANDBOX_ROUTES.ONCLICK_JS} element={<OnClickJs />} />
          <Route path={SANDBOX_ROUTES.ONCLICK_TS} element={<OnClick />} />
          <Route
            path={SANDBOX_ROUTES.RAISING_EVENTS_JS}
            element={<RaisingEventsJ />}
          />
          <Route
            path={SANDBOX_ROUTES.RAISING_EVENTS_TS}
            element={<RaisingEvents />}
          />
          <Route path={SANDBOX_ROUTES.CUSTOM_NAME} element={<CustomName />} />
        </Route>
        <Route path={SANDBOX_ROUTES.MUI_SANDBOX} element={<MuiSandbox />}>
          <Route path={SANDBOX_ROUTES.DATA_MENU} element={<DataMenu />}>
            <Route path={SANDBOX_ROUTES.MUI_BUTTON} element={<MuiButton />} />
            <Route path={SANDBOX_ROUTES.MUI_DIVIDER} element={<MuiDivider />} />
            <Route
              path={SANDBOX_ROUTES.MUI_TYPOGRAPHY}
              element={<MuiTypography />}
            />
          </Route>
          <Route path={SANDBOX_ROUTES.LAYOUT_MENU} element={<LayoutMenu />}>
            <Route path={SANDBOX_ROUTES.MUI_BOX} element={<MuiBox />} />
            <Route
              path={SANDBOX_ROUTES.MUI_CONTAINER}
              element={<MuiContainer />}
            />
            <Route path={SANDBOX_ROUTES.MUI_GRID} element={<MuiGrid />} />
            <Route path={SANDBOX_ROUTES.MUI_STACK} element={<MuiStack />} />
          </Route>
          <Route
            path={SANDBOX_ROUTES.NAVIGATION_MENU}
            element={<NavigationMenu />}
          >
            <Route path={SANDBOX_ROUTES.MUI_APP_BAR} element={<MuiAppBar />} />
            <Route
              path={SANDBOX_ROUTES.MUI_BOTTOM_NAVIGATION}
              element={<MuiBottomNavigation />}
            />
          </Route>
        </Route>

        <Route path={SANDBOX_ROUTES.PROPS_MENU} element={<PropsMenu />}>
          <Route path={SANDBOX_ROUTES.PROPS_TS} element={<PropsTs />} />
          <Route
            path={SANDBOX_ROUTES.PROPS_OBJECT_MENU}
            element={<PropsObjectMenu />}
          >
            <Route
              path={SANDBOX_ROUTES.CHILD_PROPS_OBJECT}
              element={<ChildPropsObject name={{}} />}
            />
            <Route
              path={SANDBOX_ROUTES.FATHER_PROPS_OBJECT}
              element={<FatherPropsObject />}
            />
          </Route>
          <Route
            path={SANDBOX_ROUTES.PROPS_STRING_MENU}
            element={<PropsStringMenu />}
          >
            <Route
              path={SANDBOX_ROUTES.CHILD_PROPS_STRING}
              element={<ChildPropsString text={""} />}
            />
            <Route
              path={SANDBOX_ROUTES.FATHER_PROPS_STRING}
              element={<FatherPropsString />}
            />
          </Route>
          <Route
            path={SANDBOX_ROUTES.PROPS_TWO_KEYS_MENU}
            element={<PropsTwokeysMenu />}
          >
            <Route
              path={SANDBOX_ROUTES.CHILD_PROPS_TWO_KEYS}
              element={<ChildPropsTwoKeys first={""} last={""} />}
            />
            <Route
              path={SANDBOX_ROUTES.FATHER_PROPS_TWO_KEYS}
              element={<FatherPropsTwoKeys />}
            />
          </Route>
        </Route>
        <Route path={SANDBOX_ROUTES.USE_STATE_MENU} element={<UseStateMenu />}>
          <Route path={SANDBOX_ROUTES.SET_POSTS} element={<SetPosts />} />
          <Route path={SANDBOX_ROUTES.USE_STATE} element={<UseState />} />
          <Route
            path={SANDBOX_ROUTES.USE_STATE_ARRAY_OBJECTS}
            element={<UseStateWithArrayOfObjects />}
          />
          <Route
            path={SANDBOX_ROUTES.USE_STATE_COMPLEX_OBJECTS}
            element={<UseStateWithComplexObject />}
          />
          <Route
            path={SANDBOX_ROUTES.USE_STATE_WITH_FUNCTIONS}
            element={<UseStateWithFunction />}
          />
          <Route
            path={SANDBOX_ROUTES.USE_STATE_WITH_OBJECTS}
            element={<UseStateWithObject />}
          />
        </Route>
        <Route
          path={SANDBOX_ROUTES.LYFE_CYCLE_MENU}
          element={<LyfeCycleMenu />}
        >
          <Route
            path={SANDBOX_ROUTES.LYFECYCLE_EX}
            element={<LyfecyclehookEx />}
          />
          <Route
            path={SANDBOX_ROUTES.LYFECYCLE_EX2}
            element={<ExLyfeCycle />}
          />
        </Route>
        <Route path={SANDBOX_ROUTES.CUSTOM_MENU} element={<CustomHookMenu />}>
          <Route
            path={SANDBOX_ROUTES.CUSTOM_NAME_EX2}
            element={<CustomNameEx2 />}
          />
        </Route>
        <Route path={SANDBOX_ROUTES.CONTEXT_MENU} element={<ContextMenu />}>
          <Route
            path={SANDBOX_ROUTES.SNACK_EXAMPLE}
            element={<SnackExample />}
          />
        </Route>
        <Route path={SANDBOX_ROUTES.FORM} element={<FormTest />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
