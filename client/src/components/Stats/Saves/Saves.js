import SavesRow from "./SavesRow"

function _renderSaves(attributes, proficiencyBonus, canAdd, updateProficiency) {
    const renderArray = []
    attributes.forEach((attr) => {
      renderArray.push(<SavesRow 
        key={attr.name}
        attribute={attr}
        proficiencyBonus={proficiencyBonus}
        canAdd={canAdd}
        updateProficiency={updateProficiency} 
    />)
    })
    return renderArray
  }

function Saves({ attributes, proficiencyBonus, updateSaveProficiency }) {
    const maxProficient = 2

    let currentProficiencies = attributes.filter((attr => { return attr.isProficient })).length
    
    const canAdd = () => {
        return currentProficiencies < maxProficient
    }

    const updateProficiency = (name, value) => {
        if ((value && canAdd()) || !value) {
            updateSaveProficiency(name, value)
        }
    }
    
    return (
        <article id="saves">
            <div class="block">
                <h4>Saving Throws</h4>
                {_renderSaves(attributes, proficiencyBonus, canAdd, updateProficiency)}
            </div>
        </article>
    )
}

export default Saves
