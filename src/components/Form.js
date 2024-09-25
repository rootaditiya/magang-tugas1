import {useFormik} from 'formik'
import * as yup from 'yup'
import React from 'react'

export default function Form(){

	const consult = (values) =>{
		const phoneNumber = "6281378798069"; 
		const message = `
		  *Halo saya ingin Konsultasi*

		  • *Nama:* ${values.pasienName.trim()} 
		  • *No Hp:* ${values.contactNumber.trim()}
		  • *Kondisi Pasien:* ${values.pasienRequired.trim()} 
		  • *Kebutuhan Pasien:* ${values.susterRequired.trim()} 
		  • *Kebutuhan Perawat:* ${values.condition.trim()} 
		  • *Alamat Pasien:* ${values.address.trim()}
		`.trim();

		window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
	}

	const formik = useFormik({
		initialValues: {
			pasienName: '',
			contactNumber: '',
			pasienRequired: '',
			susterRequired: '',
			condition: '',
			address: '',
		},
		onSubmit: consult,
		validationSchema: yup.object().shape({
			pasienName: yup.string().required().min(3).max(50),
			contactNumber: yup.string().required().min(8).max(10),
			pasienRequired: yup.string().required().min(3).max(50),
			susterRequired: yup.string().required().min(3).max(50),
			condition: yup.string().required().min(3).max(100),
			address: yup.string().required().min(3).max(100),
		})
	});

	const handleForm = (event) => {
		const {target} = event
		formik.setFieldValue(target.name, target.value)
	}

	return(
		<div className="container bg-white">
			<div className="form-wrapper flex p-0 ">
				<form onSubmit={formik.handleSubmit} className="flex flex-col min-w-full space-y-[1rem] justify-center p-5 min-w-full">
					<div className="form-control flex flex-col gap-5 lg:flex-row ">
						<label className="lg:basis-1/2">Masukan nama Pasien:
						<input type="text" className="" placeholder="Masukan nama pasien" onChange={handleForm} name='pasienName'/>
						{formik.errors.pasienName && <div className="text-red-500 text-sm">{formik.errors.pasienName}</div>}
						</label>

						<label className="lg:basis-1/2">Masukan nama Pasien:
						<input type="number" className="" placeholder="ex: 08xxxxxxxxx" onChange={handleForm} name='contactNumber'/>
						{formik.errors.contactRequired && <div className="text-red-500 text-sm">{formik.errors.contactNumber}</div>}
						</label>
					</div>

					<div className="form-control flex flex-col gap-5 lg:flex-row">
						<label className="lg:basis-1/2">Masukan nama Pasien:
						<select className=" cursor-pointer " onChange={handleForm} name='pasienRequired'>
						    <option value="">-- Pilih Kebutuhan Pasien--</option>
						    <option value="Ford">Ford</option>
						    <option value="Volvo">Volvo</option>
						    <option value="Fiat">Fiat</option>
						</select>
						{formik.errors.pasienRequired && <div className="text-red-500 text-sm">{formik.errors.pasienRequired}</div>}

						</label>

						<label className="lg:basis-1/2">Masukan nama Pasien:
						<select className=" cursor-pointer " onChange={handleForm} name='susterRequired'>
						    <option value="">-- Pilih --</option>
						    <option value="Ford">Ford</option>
						    <option value="Volvo">Volvo</option>
						    <option value="Fiat">Fiat</option>
						</select>
						{formik.errors.susterRequired && <div className="text-red-500 text-sm">{formik.errors.susterRequired}</div>}

						</label>
					</div>

					
					<div className="form-control">
						<label>Masukan nama Pasien:</label>
						<textarea className="" placeholder="Jelaskan kondisi pasien saat ini" onChange={handleForm} name='condition'></textarea>
						{formik.errors.condition && <div className="text-red-500 text-sm">{formik.errors.condition}</div>}
					</div>

					<div className="form-control">
						<label>Masukan nama Pasien:</label>
						<textarea className="" placeholder="Masukan alamat pasien" onChange={handleForm} name='address'></textarea>
						{formik.errors.address && <div className="text-red-500 text-sm">{formik.errors.address}</div>}
					</div>

					<div className="mb-5 mt-auto">
						<button type="submit" className="flex items-center justify-center px-6 py-4 bg-appskep-primary hover:bg-appskep-primary-hover text-white text-lg rounded-full font-semibold">Konsultasi Sekarang</button>
					</div>
				</form>
			</div>
		</div>
		);
}