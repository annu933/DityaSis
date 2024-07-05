
"use client"

import React from "react";
import { Box } from "@mui/material";

function CustomError() {
  return (
    <>
      <Box className="error-section" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        background: '#F8F9FB',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <Box className="error-content" sx={{textAlign: 'center'}}>
              <h1>404</h1>
                <h3 style={{paddingTop:10}}>PAGE NOT FOUND!</h3>
              
              </Box>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default CustomError;
