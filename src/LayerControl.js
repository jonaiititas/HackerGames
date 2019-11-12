import React from 'react'
import {Card, CardBody, CardHeader, FormCheckbox,} from "shards-react";
import styled from "styled-components"

export default function LayerControl({layers, handleChange}) {


    const Wrapper = styled.div`
         position: absolute;
         top: 5px;
         right: 5px;
         height: 300px;
         margin: 20px;
    `;
    const StyledCard = styled(Card)`
         max-width: 300px;
    `;
    return (
        <Wrapper>
            <StyledCard style={{maxWidth: "300px"}}>
                <CardHeader>Layer Control</CardHeader>
                <CardBody>
                    {/*<CardTitle>Lorem Ipsum</CardTitle>*/}
                    <FormCheckbox
                        checked={layers.geojson}
                        onChange={e => handleChange(e, "geojson")}
                    >
                        GeoJSON
                    </FormCheckbox>
                    <FormCheckbox
                        checked={layers.heatmap}
                        onChange={e => handleChange(e, "heatmap")}
                    >
                        Heatmap
                    </FormCheckbox>
                    <FormCheckbox
                        checked={layers.hexagon}
                        onChange={e => handleChange(e, "hexagon")}
                    >
                        Hexagonal Heatmap
                    </FormCheckbox>
                </CardBody>
            </StyledCard>
        </Wrapper>
    );
}