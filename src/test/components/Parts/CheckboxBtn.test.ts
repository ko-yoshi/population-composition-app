import { mount } from '@vue/test-utils'
import { expect, test, describe } from 'vitest'
import CheckboxBtn from '~/components/Parts/CheckboxBtn.vue'

describe('PartsCheckboxBtn', () => {
  const wrapper = mount(CheckboxBtn, {
    props: {
      label: 'テスト',
    },
  })
  const checkbox = wrapper.find('input[type="checkbox"]')
  const label = wrapper.find('label')

  test('props確認 labelのみ設定', () => {
    expect(wrapper.props()).toEqual({ label: 'テスト', checked: false, bgColor: '#4287f5' })
    expect(label.text()).toEqual('テスト')
  })

  test('props確認 全て設定', async () => {
    await wrapper.setProps({
      label: 'テスト2',
      checked: true,
      bgColor: '#123456',
    })
    expect(wrapper.props()).toEqual({ label: 'テスト2', checked: true, bgColor: '#123456' })
  })

  test('chekcedでlabelのclassにcheckedがつくか確認', async () => {
    await checkbox.setValue(true)
    expect(label.attributes('class')).toBe('checked')
  })

  test('emit確認', async () => {
    const emit = wrapper.emitted()
    await checkbox.setValue(true)
    expect(emit.change).toBeTruthy()
    expect(emit.change[0]).toEqual([true])
    await checkbox.setValue(false)
    expect(emit.change).toBeTruthy()
    expect(emit.change[1]).toEqual([false])
  })

  test('snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
