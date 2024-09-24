import Button from './Button.js'

export default function Form(){

	return(
		<div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 ">

		  <div className=" forms">
		  	<label className="flex flex-col">Nama Pasien
		      <input type="text" className="form-group w-full" placeholder="masukan nama pasien"/>
		    </label>
		  </div>

		  <div className=" forms">
		  	<label className="flex flex-col">Nomor Telpon/Whatsapp
		      <input type="number" className="form-group w-full" placeholder="ex: 08xxxxxxxxx"/>
		    </label>
		  </div>

		  <div className=" forms">
		  	<label className="flex flex-col">Kebutuhan Pasien 
		      	<select className="form-group cursor-pointer w-full">
					<option value="Ford">-- Pilih Kebutuhan Pasien--</option>
					<option value="Ford">Ford</option>
					<option value="Volvo" selected>Volvo</option>
					<option value="Fiat">Fiat</option>
				</select>
		    </label>
		  </div>

		  <div className=" forms">
		  	<label className="flex flex-col">Kebutuhan Perawatan 
		      	<select className="form-group cursor-pointer w-full">
					<option value="Ford">-- Pilih --</option>
					<option value="Ford">Ford</option>
					<option value="Volvo" selected>Volvo</option>
					<option value="Fiat">Fiat</option>
				</select>
		    </label>
		  </div>

		  <div className=" forms lg:col-span-2">
		  	<label className="flex flex-col">Kondisi Pasien
		      	<textarea className="form-group w-full" placeholder="Jelaskan kondisi pasien saat ini">
				  Content of the textarea.
				</textarea>
		    </label>
		  </div>

		  <div className=" forms lg:col-span-2">
		  	<label className="flex flex-col">Alamat Lengkap Pasien
		      	<textarea className="form-group w-full" placeholder="Masukan alamat pasien">
				  Content of the textarea.
				</textarea>
		    </label>
		  </div>

		  <div className="mt-10"><Button title="Konsultasi Sekarang"/></div>

		</div>
		);
}