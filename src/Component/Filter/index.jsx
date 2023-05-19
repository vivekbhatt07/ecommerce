import React from "react";

import {
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { ExpandMore } from "@mui/icons-material";

import "./Filter.css";

function Filter() {
  const marks = [
    {
      value: 0,
    },
    {
      value: 20,
    },
    {
      value: 37,
    },
    {
      value: 100,
    },
  ];

  const PrettoSlider = styled(Slider)({
    color: "#fcaf17",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#fcaf17",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  // function valuetext(value: number) {
  //   return `${value}°C`;
  // }

  return (
    <div className="filter">
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
              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Checkbox
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Action"
              />
              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Checkbox
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Anime"
              />
              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Checkbox
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Racing"
              />
              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Checkbox
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Horror"
              />
              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Checkbox
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Sports"
              />
              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Checkbox
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Adventure"
              />
              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Checkbox
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Strategy"
              />
              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Checkbox
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Open World"
              />
              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Checkbox
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Survival"
              />
              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Checkbox
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Simulation"
              />
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
              <RadioGroup defaultValue="female" name="radio-buttons-group">
                <FormControlLabel
                  value="four"
                  sx={{ color: "#fff" }}
                  control={
                    <Radio
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
                  value="one"
                  sx={{ color: "#fff" }}
                  control={
                    <Radio
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
              </RadioGroup>
            </fieldset>
          </AccordionDetails>
        </Accordion>

        {/* RATING */}
        <fieldset className="filter_field filter_rating">
          <legend className="filter_legend">RATING</legend>
          <Slider defaultValue={1} step={5} marks min={1} max={5} />
        </fieldset>

        <fieldset className="filter_field filter_price">
          <legend className="filter_legend">PRICE</legend>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
          />
        </fieldset>
      </div>
    </div>
  );
}

export default Filter;
