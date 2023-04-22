import { mount } from '@vue/test-utils'
import { expect, test, describe } from 'vitest'
import RadioBtn from '~/components/Parts/RadioBtn.vue'

describe('PartsCheckboxBtn', () => {
  const wrapper = mount(RadioBtn, {
    props: {
      label: 'テスト',
    },
  })
  const label = wrapper.find('label')

  test('props確認 labelのみ設定', () => {
    expect(wrapper.props()).toEqual({ label: 'テスト', name: '', checked: false })
    expect(label.text()).toEqual('テスト')
  })

  test('props確認 全て設定', async () => {
    await wrapper.setProps({
      label: 'テスト2',
      name: 'name-radio',
      checked: true,
    })
    expect(wrapper.props()).toEqual({ label: 'テスト2', checked: true, name: 'name-radio' })
    expect(label.text()).toEqual('テスト2')
  })

  test('snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
