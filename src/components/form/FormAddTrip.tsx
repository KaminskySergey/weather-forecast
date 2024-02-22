'use client'
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import HeaderModal from '../ui/modal/Header.modal';
import { useValidateAddTrip } from '@/hooks/useValidateAddTrip';
import { useFilterForForm } from '@/hooks/useFilterForForm';
import { IAddTrip } from '@/types/trip.interface';

interface IFormAddTrip {
  handleToggle: () => void
  addTrip: (values: IAddTrip) => void
}

export default function FormAddTrip({handleToggle, addTrip}: IFormAddTrip) {

const {validationSchema} = useValidateAddTrip()
const {filteredCities} = useFilterForForm()
  const formik = useFormik({
        initialValues: {
          city: '',
          startDate: '',
          endDate: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          addTrip(values)
          handleToggle()
        },
      });
    
      return (
        <div className='relative w-[500px] h-[500px] bg-white rounded-lg shadow-md p-12'>
  <HeaderModal title='Create trip'/>
  <div className='pt-[64px]'>
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700">
          City
        </label>
        <select
          id="city"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled>Select a city</option>
          {filteredCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {formik.touched.city && formik.errors.city && (
          <div className="text-red-500 text-[12px]">{formik.errors.city}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="startDate" className="block text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.startDate}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        {formik.touched.startDate && formik.errors.startDate && (
          <div className="text-red-500 text-[12px]">{formik.errors.startDate}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="endDate" className="block text-gray-700">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.endDate}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        {formik.touched.endDate && formik.errors.endDate && (
          <div className="text-red-500 text-[12px]">{formik.errors.endDate}</div>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Create Trip
      </button>
    </form>
  </div>
</div>
      );
    };