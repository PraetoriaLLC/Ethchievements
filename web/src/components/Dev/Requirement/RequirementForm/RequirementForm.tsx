import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const RequirementForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.requirement?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="achievementId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Achievement id
        </Label>
        <NumberField
          name="achievementId"
          defaultValue={props.requirement?.achievementId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="achievementId" className="rw-field-error" />

        <Label
          name="address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address
        </Label>
        <TextField
          name="address"
          defaultValue={props.requirement?.address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="address" className="rw-field-error" />

        <Label
          name="signature"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Signature
        </Label>
        <TextField
          name="signature"
          defaultValue={props.requirement?.signature}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="signature" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RequirementForm
