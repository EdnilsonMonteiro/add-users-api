import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { PlusSmIcon } from '@heroicons/react/solid';

function AddNew() {
    
    return (
        <div className="flex justify-center items-center">
            <Card className="w-50">
                <button className="flex justify-center items-center">
                    <PlusSmIcon className="text-violet-300 w-25 h-25" />
                </button>
                <h2 className="text-violet-300">ADD NEW</h2>
            </Card>
        </div>
                
    )
} 

export default AddNew;