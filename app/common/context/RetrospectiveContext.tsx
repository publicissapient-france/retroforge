import { createContext, Dispatch, PropsWithChildren, useContext, useMemo, useReducer } from 'react'

import { RetrospectiveResult } from '~/common/types/Restrospective'

export enum RetrospectiveActionType {
  SET_RETROSPECTIVES_RESULT = 'set:retrospectives_result',
}

export type RetrospectiveContextPayload = RetrospectiveResult

export type RetrospectiveAction = {
  type: RetrospectiveActionType
  payload: RetrospectiveContextPayload
}

export type RetrospectiveState = {
  result?: RetrospectiveResult
}

export function retrospectiveReducer(state: RetrospectiveState, action: RetrospectiveAction): RetrospectiveState {
  switch (action.type) {
    case RetrospectiveActionType.SET_RETROSPECTIVES_RESULT:
      return {
        ...state,
        result: action.payload,
      }
  }
}

type RetrospectiveProviderProps = {
  state: RetrospectiveState
  dispatch: Dispatch<RetrospectiveAction>
}

const initialState: RetrospectiveState = {}

const defaultDispatch: Dispatch<RetrospectiveAction> = () => undefined

const RetrospectiveContext = createContext<RetrospectiveProviderProps>({ state: initialState, dispatch: defaultDispatch })

export const RetrospectiveProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(retrospectiveReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return <RetrospectiveContext.Provider value={value}>{children}</RetrospectiveContext.Provider>
}

export type RetrospectiveContextHelper = {
  setResult: (result: RetrospectiveResult) => void
}

export function retrospectiveContextHelperFactory(dispatch: Dispatch<RetrospectiveAction>): RetrospectiveContextHelper {
  function setResult(result: RetrospectiveResult) {
    dispatch({
      type: RetrospectiveActionType.SET_RETROSPECTIVES_RESULT,
      payload: result,
    })
  }

  return { setResult }
}

export const useRetrospectiveContext = () => {
  const { state, dispatch } = useContext(RetrospectiveContext)
  const helper = retrospectiveContextHelperFactory(dispatch)

  return { state, helper }
}