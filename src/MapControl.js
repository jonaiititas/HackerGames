import React from 'react'
import {Button, ButtonGroup, Card, CardBody, CardHeader, FormCheckbox} from "shards-react";
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCube, faLayerGroup} from "@fortawesome/free-solid-svg-icons";


export default function MapControl({toggle, toggleButton, layers, handleChange, toggleExtrude}) {

    const Wrapper = styled.div`
         display: flex;
         align-items: flex-start;
         justify-content: flex-end;
         height: 300px;
         margin: 20px;
    `;
    const StyledCard = styled(Card)`
         max-width: 300px;
         margin: 10px;
    `;
    const ToggleButton = styled(Button)`
        background: ${props => props.active ? "blue": "#e9ecef"};
        border: 1px solid lightgrey;
    `;
    const Icon = styled(FontAwesomeIcon)`
        color: ${props => props.active ? "white": "black"}
    `;
    return (
        <Wrapper>
            {toggle.b1.active ?
            <StyledCard style={{maxWidth: "300px"}}>
                <CardHeader>Sluoksniai</CardHeader>
                <CardBody>
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
            : null}
            <ButtonGroup vertical>
                <ToggleButton id="b1" onClick={() => toggleButton("b1")} active={toggle.b1.active}><Icon active={toggle.b1.active} icon={faLayerGroup}/></ToggleButton>
                <ToggleButton id="b2" onClick={() => {toggleButton("b2"); toggleExtrude()}} active={toggle.b2.active}><Icon active={toggle.b2.active} icon={faCube}/></ToggleButton>
            </ButtonGroup>


        </Wrapper>
    );
}