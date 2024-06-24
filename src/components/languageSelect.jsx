/** @format */

import React from "react";
import i18next from "i18next";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  ua: { label: "Українська", dir: "ltr", active: false },
  es: { label: "Española", dir: "ltr", active: false },
};

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  React.useEffect(() => {
    document.body.dir = checkKeyInObject(languageMap,selected) ? languageMap[selected].dir : languageMap["en"].dir;
  }, [menuAnchor, selected]);
 
  return (
    <div className="header-language-select">
      <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        {checkKeyInObject(languageMap,selected) ? languageMap[selected].label : languageMap["en"].label}
        {!menuAnchor ? (
          <ArrowDropDownIcon fontSize="small" />
        ) : (
          <ArrowDropDownIcon className="rotate" fontSize="small" />
        )}
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div>
          <List>
            {Object.keys(languageMap)?.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

function checkKeyInObject(obj, keyToCheck) {
  return keyToCheck in obj;
}

export default LanguageSelect;
