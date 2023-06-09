import React from "react";

import {
  FormControlLabel,
  Checkbox,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
} from "@mui/material";
import ActionButton from "../Action/ActionButton";
import { ExpandMore } from "@mui/icons-material";
import { useData } from "../../Context/DataContext";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import ActionIcon from "../Action/ActionIcon";
import { PostAddress } from "../../Service/AddressService";

import "./Filter.css";

function Filter(props) {
  const { state, dispatch } = useData();
  const { className } = props;
  const classes = className + " filter";

  // const

  return (
    <div className={classes}>
      <div className="filter_head">
        <h2 className="filter_title">FILTER</h2>
        <ActionIcon
          className="filter_reset_btn"
          handleClick={() => dispatch({ type: "RESET_FILTER" })}
        >
          <RotateLeftIcon />
        </ActionIcon>
      </div>
      <div className="filter_wrap">
        {/* CATEGORY */}
        <Accordion sx={{ backgroundColor: "#000" }}>
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <legend className="filter_legend">GENRE</legend>
          </AccordionSummary>
          <AccordionDetails>
            <fieldset className="filter_field filter_genre">
              {state.categoryList.map((currentGenre) => {
                return (
                  <FormControlLabel
                    sx={{
                      color: "#fff",
                      textTransform: "capitalize",
                      fontSize: "18px",
                    }}
                    key={currentGenre._id}
                    control={
                      <Checkbox
                        checked={state.filterBy.category.includes(
                          currentGenre.categoryName
                        )}
                        onChange={() => {
                          dispatch({
                            type: "FILTER_BY_CATEGORY",
                            payload: currentGenre.categoryName,
                          });
                        }}
                        sx={{
                          color: "#fcaf17",
                          "&.Mui-checked": {
                            color: "#fcaf17",
                          },
                        }}
                      />
                    }
                    label={currentGenre.categoryName}
                  />
                );
              })}
            </fieldset>
          </AccordionDetails>
        </Accordion>

        {/* SORT */}
        <Accordion sx={{ backgroundColor: "#000" }}>
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <legend className="filter_legend">SORT</legend>
          </AccordionSummary>
          <AccordionDetails>
            <fieldset className="filter_field filter_sort">
              <FormControlLabel
                sx={{ color: "#fff", fontSize: "18px" }}
                control={
                  <Radio
                    value="lowToHigh"
                    checked={state.filterBy.sort == "lowToHigh"}
                    onChange={(event) => {
                      dispatch({
                        type: "FILTER_BY_RADIO",
                        payload: event.target.value,
                      });
                    }}
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Price: Low to High"
              />

              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Radio
                    value="highToLow"
                    checked={state.filterBy.sort == "highToLow"}
                    onChange={(event) =>
                      dispatch({
                        type: "FILTER_BY_RADIO",
                        payload: event.target.value,
                      })
                    }
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Price: High to Low"
              />
            </fieldset>
          </AccordionDetails>
        </Accordion>
        <fieldset className="filter_field filter_rating">
          <label className="filter_rating_label">
            <span>RATING</span>
            <input
              type="range"
              className="filter_slider"
              min="0"
              max="5"
              list="ratings"
              value={state.filterBy.rating}
              onChange={(event) => {
                dispatch({
                  type: "FILTER_BY_RATING",
                  payload: event.target.value,
                });
              }}
            />
            <datalist id="ratings">
              <option value="0" label="0"></option>
              <option value="1" label="1"></option>
              <option value="2" label="2"></option>
              <option value="3" label="3"></option>
              <option value="4" label="4"></option>
              <option value="5" label="5"></option>
            </datalist>
          </label>
          {/* <Slider
            aria-label="Custom marks"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
          /> */}
        </fieldset>
      </div>
    </div>
  );
}

export default Filter;
