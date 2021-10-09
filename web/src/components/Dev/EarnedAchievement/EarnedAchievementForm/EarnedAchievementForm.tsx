import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const EarnedAchievementForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.earnedAchievement?.id)
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
          name="address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address
        </Label>
        <TextField
          name="address"
          defaultValue={props.earnedAchievement?.address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="address" className="rw-field-error" />

        <Label
          name="achievementId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Achievement id
        </Label>
        <NumberField
          name="achievementId"
          defaultValue={props.earnedAchievement?.achievementId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="achievementId" className="rw-field-error" />

        <Label
          name="awardedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Awarded at
        </Label>
        <DatetimeLocalField
          name="awardedAt"
          defaultValue={formatDatetime(props.earnedAchievement?.awardedAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="awardedAt" className="rw-field-error" />

        <Label
          name="mintedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Minted at
        </Label>
        <DatetimeLocalField
          name="mintedAt"
          defaultValue={formatDatetime(props.earnedAchievement?.mintedAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="mintedAt" className="rw-field-error" />

        <Label
          name="isRare"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is rare
        </Label>
        <CheckboxField
          name="isRare"
          defaultChecked={props.earnedAchievement?.isRare}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="isRare" className="rw-field-error" />

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

export default EarnedAchievementForm
