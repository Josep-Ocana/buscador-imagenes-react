import { Image } from "../types"

export type ImageActions =
    { type: 'fetch-images-request'} |
    { type: 'fetch-images-success', payload: Image[]} |
    { type: 'fetch-images-error', payload: string} 

export type ImageState = {
  loading: boolean
  images: Image[]
  error: string | null
}

export const initialState = {
  loading: false,
  images: [],
  error: null
}

export const imageReducer = (
  state: ImageState,
  action: ImageActions
) => {
  if(action.type === 'fetch-images-request'){
    return{
      ...state
    }
  }
  if(action.type === 'fetch-images-success'){
    return{
      ...state
    }
  }
  if(action.type === 'fetch-images-error'){
    return{
      ...state
    }
  }
  
  return state
}
