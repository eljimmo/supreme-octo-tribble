import React, { useState } from 'react';

function ModelConfigurator() {
    const [optimizer, setOptimizer] = useState('adam');
    const [loss, setLoss] = useState('mse');
    const [layers, setLayers] = useState([{ type: 'Dense', units: 64, activation: 'relu' }]);

    const addLayer = () => {
        setLayers([...layers, { type: 'Dense', units: 64, activation: 'relu' }]);
    };

    const updateLayer = (index, field, value) => {
        const updatedLayers = [...layers];
        updatedLayers[index][field] = value;
        setLayers(updatedLayers);
    };

    const handleSubmit = () => {
        // Here you'd typically send this configuration to a server or another service to create and train the model
        console.log({ optimizer, loss, layers });
    };

    return (
        <div>
            <h2>Model Configuration</h2>
            <div>
                <label>Optimizer: </label>
                <select value={optimizer} onChange={(e) => setOptimizer(e.target.value)}>
                    <option value="adam">Adam</option>
                    <option value="sgd">SGD</option>
                    {/* Add other optimizers if needed */}
                </select>
            </div>
            <div>
                <label>Loss Function: </label>
                <select value={loss} onChange={(e) => setLoss(e.target.value)}>
                    <option value="mse">Mean Squared Error</option>
                    <option value="mae">Mean Absolute Error</option>
                    {/* Add other loss functions if needed */}
                </select>
            </div>
            <h3>Layers:</h3>
            {layers.map((layer, index) => (
                <div key={index}>
                    <label>Type: </label>
                    <select
                        value={layer.type}
                        onChange={(e) => updateLayer(index, 'type', e.target.value)}
                    >
                        <option value="Dense">Dense</option>
                        {/* Add other layer types if needed */}
                    </select>
                    <label>Units: </label>
                    <input
                        type="number"
                        value={layer.units}
                        onChange={(e) => updateLayer(index, 'units', parseInt(e.target.value))}
                    />
                    <label>Activation: </label>
                    <select
                        value={layer.activation}
                        onChange={(e) => updateLayer(index, 'activation', e.target.value)}
                    >
                        <option value="relu">ReLU</option>
                        <option value="sigmoid">Sigmoid</option>
                        <option value="tanh">Tanh</option>
                        {/* Add other activations if needed */}
                    </select>
                </div>
            ))}
            <button onClick={addLayer}>Add Layer</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default ModelConfigurator;
