import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const IntegrationForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.integration?.id)
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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.integration?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        <TextField
          name="description"
          defaultValue={props.integration?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label
          name="logoUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Logo url
        </Label>
        <TextField
          name="logoUrl"
          defaultValue={props.integration?.logoUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="logoUrl" className="rw-field-error" />

        <Label
          name="baseUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Base url
        </Label>
        <TextField
          name="baseUrl"
          defaultValue={props.integration?.baseUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="baseUrl" className="rw-field-error" />

        <Label
          name="infoPath"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Info path
        </Label>
        <TextField
          name="infoPath"
          defaultValue={props.integration?.infoPath}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="infoPath" className="rw-field-error" />

        <Label
          name="promoAchievementId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Promo achievement id
        </Label>
        <TextField
          name="promoAchievementId"
          defaultValue={props.integration?.promoAchievementId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="promoAchievementId" className="rw-field-error" />

        <Label
          name="color"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Color
        </Label>
        <TextField
          name="color"
          defaultValue={props.integration?.color}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="color" className="rw-field-error" />

        <Label
          name="secondaryColor"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Secondary color
        </Label>
        <TextField
          name="secondaryColor"
          defaultValue={props.integration?.secondaryColor}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="secondaryColor" className="rw-field-error" />

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

export default IntegrationForm
