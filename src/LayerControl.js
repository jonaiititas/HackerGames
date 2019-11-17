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
                <CardHeader>Sluoksniai</CardHeader>
                <CardBody>
                    {/*<CardTitle>Lorem Ipsum</CardTitle>*/}
                    <FormCheckbox
                        disabled
                        checked={layers.districts}
                        onChange={e => handleChange(e, "districts")}
                    >
                        Rajonai
                    </FormCheckbox>
                    <FormCheckbox
                        checked={layers.food}
                        onChange={e => handleChange(e, "food")}
                    >
                        Maisto tiekimas
                    </FormCheckbox>
                    <FormCheckbox
                        checked={layers.transport}
                        onChange={e => handleChange(e, "transport")}
                    >
                        Transportas ir infrastruktūra
                    </FormCheckbox>
                    <FormCheckbox
                        checked={layers.culture}
                        onChange={e => handleChange(e, "culture")}
                    >
                        Kultūra
                    </FormCheckbox>
                    <FormCheckbox
                        checked={layers.shops}
                        onChange={e => handleChange(e, "shops")}
                    >
                        Parduotuvės
                    </FormCheckbox>
                    <FormCheckbox
                        checked={layers.health}
                        onChange={e => handleChange(e, "health")}
                    >
                        Sveikata
                    </FormCheckbox>
                </CardBody>
            </StyledCard>
        </Wrapper>
    );
}